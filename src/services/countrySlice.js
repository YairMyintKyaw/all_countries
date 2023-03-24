import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "country",
  initialState: {
    countries: [],
    darkmood: false,
    searchInput: "",
  },
  reducers: {
    updateCountryList: (state, { payload }) => {
      state.countries.length = 0;
      state.countries.push(...payload);
    },
    toggleDarkmood: (state) => {
      state.darkmood = !state.darkmood;
    },
    updateSearchInput: (state, { payload }) => {
      state.searchInput = payload;
    },
  },
});

export const { updateCountryList, toggleDarkmood, updateSearchInput } =
  countrySlice.actions;
export default countrySlice.reducer;
