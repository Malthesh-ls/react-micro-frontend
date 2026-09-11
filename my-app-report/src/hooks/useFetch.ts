import { useState, useEffect, useCallback, useRef } from 'react';

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

export function useFetch<T = any>(url: string, options?: RequestInit) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  // Keep options in a ref to avoid infinite re-render loops if the user passes an inline object
  const optionsRef = useRef(options);
  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  const fetchData = useCallback(async (abortSignal?: AbortSignal) => {
    setState((prevState) => ({ ...prevState, isLoading: true }));
    
    try {
      const response = await fetch(url, { ...optionsRef.current, signal: abortSignal });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setState({ data: result, isLoading: false, error: null });
    } catch (err: any) {
      // Ignore errors caused by standard request cancellation
      if (err.name !== 'AbortError') {
        setState({ data: null, isLoading: false, error: err as Error });
      }
    }
  }, [url]);

  useEffect(() => {
    const controller = new AbortController();
    
    fetchData(controller.signal);

    // Aborts the fetch request if the component unmounts before completion
    return () => {
      controller.abort();
    };
  }, [fetchData]);

  // Expose states and a manual refetch function
  return { ...state, refetch: () => fetchData() };
}
