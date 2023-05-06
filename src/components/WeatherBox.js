// WetherCard component
// 現在の天気を表示するコンポーネント
import { Box, Typography } from '@mui/material';

export const WeatherBox = (props) => {
  // console.log(props);
  const { city, date, time, weather, temperature, humidity, wind_speed, wind_deg } = props;
  return (
    <>
      <Box sx={{ mx: 2, my: 2, bgcolor: 'grey.300' }}>
        <Typography variant="caption">WeatherBox Component</Typography>
        <Box>
          <Typography variant="body1">
            {`${city} ${date} ${time}`}
          </Typography>
          <Typography variant="h2">
            {weather}
          </Typography>
        </Box>
        <Box >
          <Typography variant="h3">
            {`${temperature}℃`}
          </Typography>
        </Box>
        <Box >
          {`${humidity}%`}
        </Box>
        <Box>
          {`${wind_deg} ${wind_speed}m/s`}
        </Box>
      </Box>
    </>
  );
}