import { ReactElement } from "react";

export interface ErrorBoundaryProps {
  fallback: ReactElement;
  children: ReactElement;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}