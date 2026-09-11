import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showLoading: false,
}

export const globalLoading = createSlice({
  name: 'globalLoading',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.showLoading = true;
    },
    hideLoading: (state) => {
      state.showLoading = false;
    }
  }
})

export const { showLoading, hideLoading } = globalLoading.actions;

export default globalLoading.reducer;