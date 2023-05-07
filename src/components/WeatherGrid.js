// WetherCard component
// 現在の天気を表示するコンポーネント
import { Grid, Typography } from '@mui/material';

export const WeatherGrid = (props) => {
  const { city, date, time, weather, temperature, humidity, wind_speed, wind_deg } = props;
  return (
    <>
      <Grid container sx={{ mx: 2, my: 2, bgcolor: 'grey.300' }}>
        <Grid item xs={12}>
          <Typography variant="h6">WeatherGrid Component</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            {`${city} ${date} ${time}`}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2">
            {weather}
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
    </>
  );
}