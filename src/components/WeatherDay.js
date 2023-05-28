import React from 'react';
import { WeatherIcon } from './WeatherIcon';
import { Grid } from '@mui/material';

// const displayName = 'WeatherDay';

export const WeatherDay = (props) => {
    const { date, weather, tempMax, tempMin } = props;
    const weekday = date.toLocaleString("ja-JP", { weekday: "long" });

    return (
        <Grid container sx={{ border: 1 }} key={date}>
            <Grid item xs={4}>{`${date.month}/${date.day} (${weekday})`}</Grid>
            <Grid item xs={4}><WeatherIcon weather={weather} size={"2em"} /></Grid>
            <Grid item xs={4}>
                <Grid container>
                    <Grid item xs={12}>{`最高：${tempMax}℃`}</Grid> <Grid item xs={12}>{`最低：${tempMin}℃`}</Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}