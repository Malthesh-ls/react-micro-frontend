import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SnackBarStatus {
  show: boolean;
  message: string;
  type?: NotificationType;
  duration: number;
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

const initialState: SnackBarStatus = {
  show: false,
  message: '',
  type: 'success',
  duration: 3000
};

export const snackBarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackBar: (state, action: PayloadAction<{ message: string; duration?: number; type?: NotificationType }>) => {
      state.show = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.duration = action.payload.duration || 3000;
    },
    hideSnackBar: (state) => {
      state.show = false;
    }
  }
});

export const { showSnackBar, hideSnackBar } = snackBarSlice.actions;

export default snackBarSlice.reducer;