// Weekly Wether Component
import { Stack, Grid, Box } from '@mui/material';
import React from 'react';

export const WeeklyWeatherStack = (props) => {
  const { weeklyWeatherData } = props;

  return (
    <>
      <h2>Weekly Wether</h2>
      <Stack spacing={2} >
        {weeklyWeatherData.map((data) => {
          return (
            // <Stack spacing={2} direction="row" >
            //   <Box>{data.date}</Box>
            //   <Box>{data.weather}</Box>
            //   <Box>{data.tempMax}</Box>
            //   <Box>{data.tempMin}</Box>
            // </Stack>
            <Grid container sx={{ border: 1 }}>
              <Grid item xs={4}>{data.date}</Grid>
              <Grid item xs={4}>{data.weather}</Grid>
              <Grid item xs={4}>
                <Grid conatiner>
                  <Grid item xs={12}>{`最高気温：${data.tempMax}`}</Grid>
                  <Grid item xs={12}>{`最低気温：${data.tempMin}`}</Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </>
  );
}