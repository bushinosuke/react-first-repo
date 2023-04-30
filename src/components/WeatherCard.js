// WetherCard component
// 現在の天気を表示するコンポーネント
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const WeatherCard = (props) => {
  console.log(props);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>label</TableCell>
              <TableCell align="right">value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="city">
              <TableCell component="th" scope="row">
                city
              </TableCell>
              <TableCell align="right">{props.city}</TableCell>
            </TableRow>
            <TableRow key="date">
              <TableCell component="th" scope="row">
                date
              </TableCell>
              <TableCell align="right">{props.date}</TableCell>
            </TableRow>
            <TableRow key="time">
              <TableCell component="th" scope="row">
                time
              </TableCell>
              <TableCell align="right">{props.time}</TableCell>
            </TableRow>
            <TableRow key="weather">
              <TableCell component="th" scope="row">
                weather
              </TableCell>
              <TableCell align="right">{props.weather}</TableCell>
            </TableRow>
            <TableRow key="temperature">
              <TableCell component="th" scope="row">
                temperature
              </TableCell>
              <TableCell align="right">{props.temperature}</TableCell>
            </TableRow>
            <TableRow key="humidity">
              <TableCell component="th" scope="row">
                humidity
              </TableCell>
              <TableCell align="right">{props.humidity}</TableCell>
            </TableRow>
            <TableRow key="wind">
              <TableCell component="th" scope="row">
                wind
              </TableCell>
              <TableCell align="right">{props.wind_deg}/{props.wind_speed}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}