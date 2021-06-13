import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
    name: "event",
    initialState: {
        isLoading: false,
        isShown: false,
        data: [],
        isLoaded: false,
        searchedEvents: [],
        savedEvents: []
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
        doNotShowData: (state) => {
            state.isShown = false;
        },
        loadEvents: (state, action) => {
            state.isLoading = false;
            state.isLoaded = true;
            state.searchedEvents = action.payload.data;
        },
        savedEvent: (state, action) => {
            state.savedEvents.push(action.payload.event);
        }
    },
});

export const { isLoading, isLoaded, showData, loadEvents, savedEvent, doNotShowData } = eventSlice.actions;

export const eventState = (state) => state.event;

export default eventSlice.reducer;
