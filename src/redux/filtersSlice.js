import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.filters.name;

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
