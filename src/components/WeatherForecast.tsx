import { useEffect, useState } from 'react';
import { getWeather } from '../services/ForecastService';
import { Period } from '../services/Weather';
import './WeatherForecast.css';

export const WeatherForecast = () => {
  const [detailedForecast, setDetailedForecast] = useState('');
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [temperature, setTemp] = useState<number>();
  const [newArray, setNewArray] = useState<Period[]>([]);
  
  useEffect(() => {
    getWeather().then((response) => {
      const { data } = response;
      setNewArray(data.properties.periods);
      console.log(data);
    });
  }, []);

  return (
    <>
    <div className="WeatherForecast">
      <table>
        <th>Time</th>
        <th>Temp</th>
        <th>Visual</th>
        <th>Details</th>
        {newArray.map((period) => 
        <tr>
        <td>{period.name}</td>
      <td>Temperature: {period.temperature}</td>
      <td><img src={period.icon}/></td>
      <td>{period.detailedForecast}</td>
      </tr>
      )}
      </table>
    </div>
    <div className='sevenDay'>Seven Day Forecast</div>
    </>
    );
  }

