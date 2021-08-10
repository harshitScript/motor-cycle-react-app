import { createSlice } from "@reduxjs/toolkit";
const bikeDataSlice = createSlice({
  name: "Bikes",
  initialState: {
    bikeData: [],
    bikeSearchList: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    bikeDataChanger(state, action) {
      state.bikeData = action.payload;
      state.bikeSearchList = action.payload;
    },
    bikeSearchListSetter(state, action) {
      state.bikeSearchList = action.payload;
    },
    setIsLoadingTrue(state) {
      state.isLoading = true;
    },
    setIsLoadingFalse(state) {
      state.isLoading = false;
    },
    setErrorTrue(state) {
      state.error = true;
    },
    setErrorFalse(state) {
      state.error = false;
    },
  },
});

export default bikeDataSlice;

// action creator export
export const bikeSliceActions = bikeDataSlice.actions;
