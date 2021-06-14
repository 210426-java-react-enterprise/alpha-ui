import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { weatherState } from "../../../features/weatherData/weatherSlice";

const Current = () => {
  const weather = useSelector(weatherState);

  const imgIcon = `/icons/${weather.current.icon}.png`;

  return (
    <>
      <Row>
        <Col>
          <Row className="d-flex">
            <Col>
              <div className="cityCurrent">{weather.city}</div>
              <div className="tempCurrent">{weather.current.temp} &deg;F</div>
            </Col>
            <Col>
              <Row>
                <Col className="d-flex justify-content-center align-items-center">
                  <img width="50px;" className="imgIcon" src={imgIcon}></img>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="descriptionCurrent">
                    {weather.current.description}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="">
              <Row>
                <Col>
                  <div className="humidityCurrent">
                    Humidity: {weather.current.humidity}%
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="pressureCurrent">
                    Pressure: {weather.current.pressure} mlB
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="windCurrent">
                    Wind: {weather.current.wind} mph
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Current;
