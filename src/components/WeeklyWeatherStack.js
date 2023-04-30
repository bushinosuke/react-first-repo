// Weekly Wether Component
import { Stack, Box } from '@mui/material';
import React from 'react';

export const WeeklyWeatherStack = (props) => {
  const { weeklyWeatherData } = props;

  return (
    <>
      <h2>Weekly Wether</h2>
      <Stack spacing={2} >
        {weeklyWeatherData.map((data) => {
          return (
            <Stack spacing={2} direction="row" >
              <Box>{data.date}</Box>
              <Box>{data.weather}</Box>
              <Box>{data.tempMax}</Box>
              <Box>{data.tempMin}</Box>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
}