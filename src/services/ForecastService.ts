import axios from 'axios';
import { Weather } from './Weather';
export const getWeather = () => {
    return axios.get<Weather>('https://api.weather.gov/gridpoints/DTX/65,33/forecast')
};
