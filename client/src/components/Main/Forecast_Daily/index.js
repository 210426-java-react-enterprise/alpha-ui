import { Row } from "react-bootstrap";
import Day from "./day";
import { useSelector } from 'react-redux';
import { weatherState } from '../../../features/weatherData/weatherSlice';

const SevenDay = () => {

  const weather = useSelector(weatherState);

  return (
    <>
        <Row className="d-flex bg-light border mt-3">
          {weather.daily.sevenDay.map((day, i) => {
            return (
              <Day
                key={i}
                max_temp={day.max_temp}
                min_temp={day.min_temp}
                dt={day.dt}
                humidity={day.humidity}
                pressure={day.pressure}
                icon={day.icon}
                uvi={day.uvi}
                wind={day.wind}
              />
            );
          })}
        </Row>
    </>
  );
};

export default SevenDay;
