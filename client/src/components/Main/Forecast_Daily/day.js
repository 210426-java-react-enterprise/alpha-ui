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
  // const imgIcon = `/icons/${data.icon}.png`;

  return (
    <Row>
      <Col>
        <Row>
          <Col>{max_temp}</Col>
        </Row>
        <Row>
          <Col>{min_temp}</Col>
        </Row>
        <Row>
          <Col>{humidity}</Col>
        </Row>
        <Row>
          <Col>{icon}</Col>
        </Row>
        <Row>
          <Col>{pressure}</Col>
        </Row>
        <Row>
          <Col>{uvi}</Col>
        </Row>
        <Row>
          <Col>{wind}</Col>
        </Row>
        <Row>
          <Col>{dt}</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Day;
