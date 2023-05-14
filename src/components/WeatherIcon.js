import { WiAlien, WiCloud, WiDayCloudy, WiDaySunny, WiFog, WiRain, WiRainWind, WiSnow, WiThunderstorm } from "react-icons/wi"

export const WeatherIcon = (props) => {
  const { weather,size } = props;
  switch (weather) {
    case '晴れ':
      return <WiDaySunny size={size} />
    case '薄曇り':
      return <WiDayCloudy size={size} />
    case '曇り':
      return <WiCloud size={size} />
    case '霧':
      return <WiFog size={size} />
    case '霧雨':
      return <WiRain  size={size}/>
    case '雨':
      return <WiRain size={size} />
    case '雪':
      return <WiSnow size={size} />
    case '雷雨':
      return <WiThunderstorm size={size} />
    case '暴風雨':
      return <WiRainWind size={size} />
    default:
      return <WiAlien size={size} />
  }
}