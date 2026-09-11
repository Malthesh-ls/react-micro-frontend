import { Tuple } from "@reduxjs/toolkit";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface NavigateOptions {
  pathname: string;
}

export interface MountOptions {
  mountPoint: any;
  initialPathname: string;
}

export type MountApp = (options: MountOptions) => () => void;

export function useMicroApp(name: string, appBasename: string, mount: MountApp) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Liston to navigation events dispatched inside app mfe
  useEffect(() => {
    const appNavigationEveHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${appBasename}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    }
    window.addEventListener(`[${name}] navigated`, appNavigationEveHandler);

    return () => {
      window.removeEventListener(`[${name}] navigated`, appNavigationEveHandler);
    }
  }, [location]);

  //Listen for shell location changes and dispatch a notification
  useEffect(() => {
    if (location.pathname.startsWith(appBasename)) {
      window.dispatchEvent(
        new CustomEvent('[container] navigated', {
          detail: location.pathname.replace(appBasename, ''),
        }),
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => { });

  // Mount app mfe
  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = mount({
      mountPoint: wrapperRef.current!,
      initialPathname: location.pathname.replace(appBasename, ''),
    });
    isFirstRunRef.current = false;
  }, [location])

  useEffect(() => unmountRef.current, []);

  return [wrapperRef];
}