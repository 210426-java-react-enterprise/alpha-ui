import axios from 'axios';
import { CurrentWeather } from '../models/models';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const currentWeather = async (city) => {

    let current = new CurrentWeather;
    let lat;
    let lon;

    const currentCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    await axios.get(currentCall).then(res => {
        console.log(res);
        lat = res.data.coord.lat;
        lon = res.data.coord.lon;
        current.city_id = res.data.id;
        current.description = res.data.weather[0].description;
        current.icon = res.data.weather[0].icon;
        current.temp = res.data.main.temp;
        current.pressure = res.data.main.pressure;
        current.humidity = res.data.main.humidity;
        current.wind = res.data.wind.speed;
    })
    console.log("current weather: ", current);
    return current;
    
}

