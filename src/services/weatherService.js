import axios from "axios";
import { BehaviorSubject } from "rxjs";
import {  map, filter } from 'rxjs/operators'; 
//https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
export const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?';

export const weather$ = new BehaviorSubject({});

export const locationOffset$ = weather$.pipe(map((res) => {
    return res.timezone_offset;
}))
export const dailyWeather$ = weather$.pipe(map((res) => {
     return res.daily;
}));

//Get location
// gets called on mount
export async function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(location => {
            const lat = location.coords.latitude;
            const long = location.coords.longitude;
            const coords = `lat=${lat}&lon=${long}`;
            getLocationWeather(coords);
           
        })
    }
}
//Get weather through geolocation on initial load
async function getLocationWeather(coords) {
    const url = `${baseUrl}${coords}&units=metric&appid=${apiKey}`;
    try {
        const res = await axios.get(url)
        weather$.next(res.data);
    } catch (error) {
        console.log('asd');
    }
}

//Get weather by search



//Get weather by specific units Celsius and Fahrenheit.