// WetherCard component
// 現在の天気を表示するコンポーネント
import { Box, Grid, Typography } from '@mui/material';
import { WiDaySunny } from "react-icons/wi";
import { WeatherIcon } from './WeatherIcon';

export const WeatherGrid = (props) => {
  const { city, date, time, weather, temperature, humidity, wind_speed, wind_deg } = props;
  return (
    <>
      <Typography variant='subtitle1' bgcolor="primary.light" color="common.white" >現在の天気</Typography>
      <Box sx={{bgcolor: 'grey.300' }}>
        <Grid container >
          <Grid item xs={12}>
            <Typography variant="body1">
              {`${city} ${date} ${time}`}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2">
              {/* {weather} */}
              <WeatherIcon weather={weather} size={"2em"} />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3">
              {`${temperature}℃`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {`${humidity}%`}
          </Grid>
          <Grid item xs={12}>
            {`${wind_deg} ${wind_speed}m/s`}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}