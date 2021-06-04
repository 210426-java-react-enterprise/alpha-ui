import axios from "axios";
import { CurrentWeather, DailyWeather } from "../models/models";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const currentWeather = async (city) => {
  let current = new CurrentWeather();
  let lat;
  let lon;

  const currentCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    let res = await axios.get(currentCall);
    lat = res.data.coord.lat;
    lon = res.data.coord.lon;
    current.city_id = res.data.id;
    current.description = res.data.weather[0].description;
    current.icon = res.data.weather[0].icon;
    current.temp = res.data.main.temp;
    current.pressure = res.data.main.pressure;
    current.humidity = res.data.main.humidity;
    current.wind = res.data.wind.speed;
  } catch (err) {
    console.error(err);
  }

  //TODO Store lat, lon, and city name together in DB

  return current;
};

export const oneCall = async (lat, lon) => {
  let twelveHour = [];
  let sevenDay = [];

  const oneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {
    let res = await axios.get(oneCall);

    let hourly = res.data.hourly;
    let daily = res.data.daily;

    for (let i = 0; i < 12; i++) {
      let hour = new CurrentWeather();
      hour.description = hourly[i].weather[0].description;
      hour.icon = hourly[i].weather[0].icon;
      hour.temp = hourly[i].temp;
      hour.pressure = hourly[i].pressure;
      hour.humidity = hourly[i].humidity;
      hour.wind = hourly[i].wind_speed;
      twelveHour.push(hour);
    }

    for (let i = 0; i < 7; i++) {
      let day = new DailyWeather();
      day.max_temp = daily[i].temp.max;
      day.min_temp = daily[i].temp.min;
      day.dt = daily[i].dt;
      day.pressure = daily[i].pressure;
      day.humidity = daily[i].humidity;
      day.wind = daily[i].wind_speed;
      day.description = daily[i].weather.description;
      day.icon = daily[i].weather.icon;
      day.uvi = daily[i].uvi;
      sevenDay.push(day);
    }
  } catch (err) {
    console.error(err);
  }

  let forecast = {
    twelveHour: twelveHour,
    sevenDay: sevenDay,
  };

  return forecast;
};
