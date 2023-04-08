import { createSlice } from "@reduxjs/toolkit";
import { sortList } from "../../utils/constant";

const initialState = {
  sortType: sortList[0],
  sortCategory: 0,
  sortTitle: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setSortCategory: (state, action) => {
      state.sortCategory = action.payload
    },
    setSortType: (state, action) => {
      state.sortType = sortList[action.payload]
    },
    setSortTitle: (state, action) => {
      state.sortTitle = action.payload
    }
  }
})

export const { setSortCategory, setSortType,setSortTitle } = filterSlice.actions

export default filterSlice.reducer