import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    isLoading: false,
    isLoaded: false,
    city: "",
    current: {},
    daily: {},
    hourly: {},
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
      state.isLoaded = false;
    },
    loadCurrent: (state, action) => {
      state.isLoading = false;
      state.current = action.payload.data;
      state.city = action.payload.city;
    },
    loadDaily: (state, action) => {
      state.isLoading = false;
      state.daily = action.payload.data;
    },
    isLoaded: (state) => {
      state.isLoaded = true;
      state.isLoading = false;
    },
  },
});

export const { isLoading, loadCurrent, loadDaily, isLoaded } = weatherSlice.actions;

export const weatherState = (state) => state.weather;

export default weatherSlice.reducer;
