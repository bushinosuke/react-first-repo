// WetherCard component
// 現在の天気を表示するコンポーネント
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

export const WeatherGrid = (props) => {
  console.log(props);
  const { city, date, time, weather, temperature, humidity, wind_speed, wind_deg } = props;
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} sx={{ border:2 }}>
          <Typography>
            {`${date} ${time}`}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ border:2 }}>
          {city}
        </Grid>
        <Grid item xs={6} sx={{ border:2 }}>
          {weather}
        </Grid>
        <Grid item xs={6} sx={{ border:2 }}>
          {temperature}
        </Grid>
        <Grid item xs={6} sx={{ border:2 }}>
          {humidity}
        </Grid>
        <Grid item xs={6} sx={{ border:2 }}>
          {`${wind_deg}/${wind_speed}`}
        </Grid>

      </Grid>


    </>
  );
}