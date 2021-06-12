import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
    name: "event",
    initialState: {
        isLoading: false,
        isShown: false,
        data: [],
        isLoaded: false
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        isLoading: (state) => {
            state.isLoading = true;
            state.isLoaded = false;
            state.isShown = false;
        },
        isLoaded: (state, action) => {
            state.isLoading =false;
            state.isLoaded = true;
            state.data = action.payload.data;
        },
        showData: (state) => {
            state.isShown = true;
        },
    },
});

export const { isLoading, isLoaded, showData } = eventSlice.actions;

export const eventState = (state) => state.event;

export default eventSlice.reducer;
