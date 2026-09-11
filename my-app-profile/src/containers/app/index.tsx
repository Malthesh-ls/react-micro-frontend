import React from "react";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "../../hoc/error-boundary";

// @ts-expect-error SCSS is handled by the bundler and has no TypeScript declarations.
import '../../assets/styles/styles.scss';

export default function MyApp() {

  return (
    <>
      <ErrorBoundary fallback={<div>fallback...</div>}>
        <Outlet />
      </ErrorBoundary>
    </>
  )
}