import axios from "axios";
import { BehaviorSubject } from "rxjs";
import {  map } from 'rxjs/operators'; 

export const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?';
const baseGeoUrl = 'https://api.openweathermap.org/geo/1.0/direct?';
const reversedGeoUrl = 'https://api.openweathermap.org/geo/1.0/reverse?';

export const weather$ = new BehaviorSubject({});
export const city$ = new BehaviorSubject('');

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
            const geoUrl = `${reversedGeoUrl}${coords}&appid=${apiKey}`;
            getLocationWeather(coords);
            setCityName(geoUrl)
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

//Get coordinates by search input and call api with said coordinates
export async function getWeatherByLocation(location) {
    const geoUrl = `${baseGeoUrl}q=${location}&appid=${apiKey}`;

    try {
        const res = await axios.get(geoUrl);
        console.log(res.data[0]);
        let lat = res.data[0].lat;
        let long = res.data[0].lon;

        city$.next(res.data[0].name);
        const coords = `lat=${lat}&lon=${long}`;
        getLocationWeather(coords);
    } catch (error) {
        console.log('error');
    }
}

//Get city name
async function setCityName(url) {
    try {

        const res = await axios.get(url);
        city$.next(res.data[0].name);
    } catch (error) {
        console.log(error);
    }
}