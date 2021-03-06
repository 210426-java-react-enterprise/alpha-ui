import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    username: "",
    firstname: "",
    email: "",
    location: "",
    wantsWeeklyUpdates: true,
    token: "",
    isAuthenticated: false,
    isShown: false,
    
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
    },
    loggedIn: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.location = action.payload.location;
      state.wantsWeeklyUpdates =  action.payload.wantsWeeklyUpdates;
      state.isShown = true;
    },
    loggedOut: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.isShown = false;
      state.username = "";
      state.token = "";
    },
   
  },
});

export const { isLoading, loggedIn, loggedOut } = authSlice.actions;

export const authState = (state) => state.auth;

export default authSlice.reducer;
