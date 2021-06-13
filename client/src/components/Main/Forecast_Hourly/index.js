import { Row } from "react-bootstrap";
import Hour from "./hour";
import { useSelector } from "react-redux";
import { weatherState } from "../../../features/weatherData/weatherSlice";

const TwelveHour = () => {

    const weather = useSelector(weatherState);

    return (
      <>
        <Row className="d-flex bg-light border mt-3">
          {weather.daily.twelveHour.map((hour, i) => {
            return (
              <Hour
                    key={i}
                    dt={hour.dt}
               temp={hour.temp}
                icon={hour.icon}
                wind={hour.wind}
              />
            );
          })}
        </Row>
      </>
    );
}

export default TwelveHour;