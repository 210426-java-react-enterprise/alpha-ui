import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import weatherReducer from "../features/weatherData/weatherSlice";
import eventReducer from "../features/eventsData/eventsSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    weather: weatherReducer,
    event: eventReducer,
  },
});
