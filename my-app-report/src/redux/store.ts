import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import snackBarSlice from "./snackBarSlice";
import globalModalSlice from "./globalModelSlice";
import globalLoading from "./globalLoadingSlice";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    snackBar: snackBarSlice,
    globalModal: globalModalSlice,
    globalLoading: globalLoading,
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
