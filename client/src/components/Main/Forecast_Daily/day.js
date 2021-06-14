import { Row, Col } from "react-bootstrap";

const Day = ({
  max_temp,
  min_temp,
  humidity,
  icon,
  pressure,
  uvi,
  wind,
  dt,
}) => {
  const imgIcon = `/icons/${icon}.png`;

  return (
    <Col id="dayCard" className="m-2 border bg-white">
      <Row>
        <Col className="d-flex justify-content-center">
          <div className="dateDay">{dt}</div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <img className="imgDay" width="30px;" src={imgIcon}></img>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="tempDay">
            <span className="tempHigh">H: {max_temp}</span>
            <span className="tempLow">L: {min_temp}</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="uviDay">UVI: {uvi}</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="humidityDay">Humidity: <span className="humVal">{humidity}%</span></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="windDay">Wind: {wind} mph</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="pressureDay">{pressure} mlB</div>
        </Col>
      </Row>
    </Col>
  );
};

export default Day;
