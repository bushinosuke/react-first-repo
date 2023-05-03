// WetherCard component
// 現在の天気を表示するコンポーネント
import { Box, Container, Typography } from '@mui/material';

export const WeatherBox = (props) => {
  console.log(props);
  const { city, date, time, weather, temperature, humidity, wind_speed, wind_deg } = props;
  return (
    <>
        <Box item xs={12} sx={{ border: 2 }}>
          <Typography>
            {`${city} ${date} ${time}`}
          </Typography>
        </Box>
          <Typography>
            {`${city} ${date} ${time}`}
          </Typography>
        <Box item xs={6} sx={{ border: 2 }}>
          {weather}
        </Box>
        <Box item xs={6} sx={{ border: 2 }}>
          {temperature}
        </Box>
        <Box item xs={6} sx={{ border: 2 }}>
          {humidity}
        </Box>
        <Box sx={{ border: 2 }}>
          {`${wind_deg}/${wind_speed}`}
        </Box>
    </>
  );
}