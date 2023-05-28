import './App.css';
import { Title } from './components/Title';
import axios from 'axios';
import { WeatherGrid } from './components/WeatherGrid';
import { WeeklyWeatherStack } from './components/WeeklyWeatherStack';
import { useEffect, useState } from 'react';
import { useFetchWeatherData } from './hooks/useFetchWeatherData';

function App() {
  // カスタムフックから天気情報を取得する
  const [weatherProps, weeklyWeatherData] = useFetchWeatherData();

  // stateがnullならローディング中と表示する
  if (!weatherProps || !weeklyWeatherData) {
    return <div>ローディング中...</div>;
  }

  return (
    <>
      <Title title={天気予報} />
      <WeatherGrid {...weatherProps} />
      <WeeklyWeatherStack weeklyWeatherData={weeklyWeatherData} />
    </>
  );
}

export default App;
