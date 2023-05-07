import { useState, useEffect } from 'react';
import axios from 'axios';

// open-meteoのAPIを使って天気予報を取得するカスタムフック
export const useFetchWeatherData = () => {
  const [weatherProps, setWeatherProps] = useState(null);
  const [weeklyWeatherData, setWeeklyWeatherData] = useState(null);

  // WMO天気コードと日本語の対応表をオブジェクトとして定義
  const weatherCodeMap = {
    0: '晴れ',
    1: '薄曇り',
    2: '曇り',
    3: '曇り',
    4: '霧',
    5: '霧雨',
    6: '雨',
    7: '雪',
    8: '雷雨',
    9: '暴風雨'
  };

  // 16方位の配列を作成
  var directions = ["北", "北北東", "北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西"];

  const fetchWeatherData = () => {
    // 天気APIに渡すパラメータをオブジェクトとして定義
    const apiParams = {
      latitude: 35.69,
      longitude: 139.69,
      daily: 'weathercode,temperature_2m_max,temperature_2m_min',
      windspeed_unit: 'ms',
      timezone: 'Asia/Tokyo',
      current_weather: true
    };

    axios.get('https://api.open-meteo.com/v1/forecast', { params: apiParams })
      .then((response) => {
        //console.log(response.data);

        // WMO天気コードを10で割って切り捨てた値をキーとしてオブジェクトから日本語を取得
        const weatherCode = response.data.current_weather.weathercode;
        const weather = weatherCodeMap[Math.floor(weatherCode / 10)] || 'その他';

        const [date, time] = response.data.current_weather.time.split('T');

        // 配列のインデックスを計算（小数点以下は切り捨て）
        var index = Math.floor((response.data.current_weather.winddirection + 11.25) / 22.5) % 16;

        // 配列から方角を取得
        var direction = directions[index];

        setWeatherProps({
          city: '東京',
          date: date,
          time: time,
          weather: weather,
          temperature: response.data.current_weather.temperature,
          humidity: ' ',
          wind_speed: response.data.current_weather.windspeed,
          wind_deg: direction
        });

        // 週間天気予報のデータを整形する
        // 空の配列を作成
        let weeklyWeatherData = [];

        // dailyプロパティの各要素の長さを取得（一週間分のデータがあると仮定）
        const length = response.data.daily.time.length;

        // ループで一日分の天気予報情報をオブジェクトとして作成し、配列に追加
        for (var i = 0; i < length; i++) {
          // オブジェクトを作成
          var day = {
            date: response.data.daily.time[i],
            weather: weatherCodeMap[Math.floor(response.data.daily.weathercode[i] / 10)] || 'その他',
            tempMax: response.data.daily.temperature_2m_max[i],
            tempMin: response.data.daily.temperature_2m_min[i]
          };
          // 配列に追加
          weeklyWeatherData.push(day);
        }
        // 配列をstateにセット
        setWeeklyWeatherData(weeklyWeatherData);
      });
  };

  // fetchWeatherData()をuseEffectでラップして、コンポーネントがマウントされた時に実行する
  useEffect(() => { fetchWeatherData(); }, []);

  return [ weatherProps, weeklyWeatherData ];
};