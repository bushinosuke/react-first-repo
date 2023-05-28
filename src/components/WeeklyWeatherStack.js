// Weekly Wether Component
import { Stack, Grid, Box, Typography } from '@mui/material';
import React from 'react';
import { WeatherIcon } from './WeatherIcon';

export const WeeklyWeatherStack = (props) => {
  const { weeklyWeatherData } = props;

  return (
    <>
      <Typography variant='subtitle1' bgcolor="primary.light" color="common.white" >週間予報</Typography>
      <Stack spacing={0} >
        {weeklyWeatherData.map((data,index) => {
          const date = new Date(data.date);
          const month = date.getMonth() + 1;
          const d = date.getDate();
          const day = date.getDay();
          const weekday = date.toLocaleString("ja-JP", { weekday: "long" });
          
          return (
            <Grid container sx={{ border: 1 }} key={index}>
              <Grid item xs={4}>{`${month}/${d} (${weekday.substring(0, 1)})`}</Grid>
              <Grid item xs={4}><WeatherIcon weather={data.weather} size={"2em"} /></Grid>
              <Grid item xs={4}>
                <Grid container>
                  <Grid item xs={12}>{`最高：${data.tempMax}℃`}</Grid>
                  <Grid item xs={12}>{`最低：${data.tempMin}℃`}</Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </>
  );
}