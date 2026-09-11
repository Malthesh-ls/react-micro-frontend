import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalName = 'logout';

export interface SnackBarStatus {
  showTheModel: ModalName | undefined;
}

const initialState: SnackBarStatus = {
  showTheModel: undefined,
}

export const globalModalSlice = createSlice({
  name: 'globalModal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<{ name: ModalName }>) => {
      state.showTheModel = action.payload.name;
    },
    hideModel: (state) => {
      state.showTheModel = undefined;
    },
  },
});

export const { showModal, hideModel } = globalModalSlice.actions;

export default globalModalSlice.reducer;