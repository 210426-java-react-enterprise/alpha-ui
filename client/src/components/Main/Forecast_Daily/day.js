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
    <Row>
      <Col>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <img width="30px;" src={imgIcon}></img>
          </Col>
        </Row>
        <Row>
          <Col>H: {max_temp} L: {min_temp}</Col>
        </Row>
        <Row>
          <Col>Hm: {humidity}%</Col>
        </Row>
        <Row>
          <Col>{pressure} mlB</Col>
        </Row>
        <Row>
          <Col>uvi: {uvi}</Col>
        </Row>
        <Row>
          <Col>wnd: {wind}</Col>
        </Row>
        <Row>
          <Col>{dt}</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Day;
