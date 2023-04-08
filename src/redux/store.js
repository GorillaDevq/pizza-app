import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/filterSlice";

const store = configureStore({
  reducer: {
    filter
  }
})

export default store