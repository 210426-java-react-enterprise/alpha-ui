import axios from 'axios';
import { CurrentWeather } from '../models/models';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const currentWeather = async (lat, lon) => {

    let currentWeather = new CurrentWeather;
    
    const query = `https://api.openweathermap.org/data/2.5/onecall?appid=${apiKey}&lat=${lat}&lon=${lon}`;
    
    await axios.get(query).then(res => {
        console.log("response weather one call: " + res);
    })

}