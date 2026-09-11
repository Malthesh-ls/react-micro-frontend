import { ReactElement, useEffect } from "react";
import { matchRoutes, useNavigate, useLocation } from "react-router-dom";
import { routes } from "../../routing/routes";

interface NavigationMangaerProps {
  children: ReactElement;
}

export function NavigationMangaer({ children }: NavigationMangaerProps) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function shellNavigationHandler(event: Event) {
      const pathname = (event as CustomEvent<string>).detail;
      if (location.pathname === pathname || !matchRoutes(routes, { pathname })) {
        return;
      }
      navigate(pathname)
    }

    window.addEventListener(`[container] navigated`, shellNavigationHandler);

    return () => {
      window.removeEventListener(`[container] navigated`, shellNavigationHandler);
    }
  }, [location]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent(`[profile] navigated`, { detail: location.pathname }));
  }, [location]);

  return children;
}