import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import snackBarSlice from "./snackBar";
import globalModalSlice from "./globalModel";
import globalLoading from "./globalLoading";

export const store = configureStore({
  reducer: {
    snackBar: snackBarSlice,
    globalModal: globalModalSlice,
    globalLoading: globalLoading,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
