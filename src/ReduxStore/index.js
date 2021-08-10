import { configureStore } from "@reduxjs/toolkit";

import bikeDataSlice from "./bikeDataSlice";

const store = configureStore({
  reducer: bikeDataSlice.reducer,
});

export default store;
