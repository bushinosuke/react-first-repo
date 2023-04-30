// Weekly Wether Component
import React from 'react';

export const WeeklyWether = (props) => {
  const { weeklyWeatherData } = props;

  return (
    <div className="weekly-wether">
      <h2>Weekly Wether</h2>
      <table id="weather-table">
        <thead>
          <tr>
            <th>日付</th>
            <th>天気</th>
            <th>最高気温</th>
            <th>最低気温</th>
          </tr>
        </thead>
        <tbody id="weather-data">
          {weeklyWeatherData.map((data) => {
            return (
              <tr>
                <td>{data.date}</td>
                <td>{data.weather}</td>
                <td>{data.tempMax}</td>
                <td>{data.tempMin}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}