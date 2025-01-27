import './WeatherForecast.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherData from '../WeatherData/WeatherData';

const WeatherForecast = (props) => {
  const { day, img, imgAlt, conditions, time } = props;
  return (
    <div className="weather">
      <WeatherIcon src={img} alt={imgAlt} />
      <WeatherData day={day} conditions={conditions} time={time} />
    </div>
  );
}

export default WeatherForecast;