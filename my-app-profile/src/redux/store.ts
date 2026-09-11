import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import snackBarSlice from "./snackBarSlice";
import globalModalSlice from "./globalModelSlice";
import globalLoading from "./globalLoadingSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    snackBar: snackBarSlice,
    globalModal: globalModalSlice,
    globalLoading: globalLoading,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
