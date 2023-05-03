// WetherCard component
// 現在の天気を表示するコンポーネント
import { Box, Card, CardContent, Container, Typography } from '@mui/material';

export const WeatherCard = (props) => {
  console.log(props);
  const { city, date, time, weather, temperature, humidity, wind_speed, wind_deg } = props;
  return (
    <>
      <Card variant="outlined" >
        <CardContent>
          <Typography>
            {`${city} ${date} ${time}`}
          </Typography>
          <Typography>
            {weather}
          </Typography>
          <Typography>
            {`${temperature}℃`}
          </Typography>
          <Typography>
            {`${humidity}%`}
          </Typography>
          <Typography>
            {`${wind_deg} ${wind_speed}m/s`}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}