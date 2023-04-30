import './App.css';
import { Title } from './components/Title';
// import { WeatherCard } from './components/WeatherCard';
// import { WeeklyWether } from './components/WeeklyWether';
import axios from 'axios';
import { WeatherGrid } from './components/WeatherGrid';
//import CssBaseline from '@mui/material/CssBaseline'
import { WeeklyWeatherStack } from './components/WeeklyWeatherStack';

function getWeatherData() {
  axios
    .get('https://weather.tsukumijima.net/api/forecast/city/130010')
    .then((response) => {
      console.log(response.data);
    });

  return {
    city: '東京',
    date: '2021/10/10',
    time: '12:00',
    weather: '晴れ',
    temperature: '20',
    humidity: '50',
    wind_speed: '5',
    wind_deg: '北'
  };
}

function App() {
  const weatherProps = {
    city: '東京',
    date: '2021/10/10',
    time: '12:00',
    weather: '晴れ',
    temperature: '20',
    humidity: '50',
    wind_speed: '5',
    wind_deg: '北東'
  };
  const weeklyWeatherData = [
    {date: '2023/04/16', weather: '雹', tempMax: '22', tempMin: '15'},
    {date: '2021/10/11', weather: '曇り', tempMax: '20', tempMin: '10'}
  ];

  getWeatherData();

  return (
    <>
      <Title />
      {/* <WeatherCard {...weatherProps} /> */}
      <WeatherGrid {...weatherProps} />
      {/* <WeeklyWether weeklyWeatherData={weeklyWeatherData} /> */}
      <WeeklyWeatherStack weeklyWeatherData={weeklyWeatherData} />
    </>
  );
}

export default App;
