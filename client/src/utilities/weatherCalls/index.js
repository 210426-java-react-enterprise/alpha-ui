import axios from 'axios';
import { CurrentWeather, DailyWeather } from '../models/models';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const currentWeather = async (city) => {

    let current = new CurrentWeather();
   
    const currentCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    await axios.get(currentCall).then(res => {
        
        current.lat = res.data.coord.lat;
        current.lon = res.data.coord.lon;
        current.city_id = res.data.id;
        current.description = res.data.weather[0].description;
        current.icon = res.data.weather[0].icon;
        current.temp = convertTemp(res.data.main.temp);
        current.pressure = res.data.main.pressure;
        current.humidity = res.data.main.humidity;
        current.wind = res.data.wind.speed;
        
    }).catch(err => console.log(err));
    
    //TODO Store lat, lon, and city name together in DB

    return current;
    
}

export const oneCall = async (lat, lon) => {

    let twelveHour = [];
    let sevenDay = [];

    const oneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    await axios.get(oneCall).then(res => {
        console.log("response one call: ", res);
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
            day.max_temp = convertTemp(daily[i].temp.max);
            day.min_temp = convertTemp(daily[i].temp.min);
            day.dt = dateConverter(daily[i].dt);
            day.pressure = daily[i].pressure;
            day.humidity = daily[i].humidity;
            day.wind = daily[i].wind_speed;
            day.description = daily[i].weather[0].description;
            day.icon = daily[i].weather[0].icon;
            day.uvi = daily[i].uvi;
            sevenDay.push(day);
        }

    }).catch(err => console.log(err));

    let forecast = {
        twelveHour: twelveHour,
        sevenDay: sevenDay
    }

    return forecast;

}

function convertTemp(temp) {
    let num = 1.8 * (temp - 273.15) + 32
    return num.toFixed(0);
}

function dateConverter(unix) {
    let a = new Date(unix * 1000);
    let date = a.getDate();
    let month = a.getMonth();
    let year = a.getFullYear();
    return month + "/" + date;
}


