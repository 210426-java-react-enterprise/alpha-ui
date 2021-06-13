import { Row, Col } from "react-bootstrap";

const Hour = ({
  temp,
 dt,
  icon,
  
  wind,
 
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
            <span className="tempHour">{temp}&deg;</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="windHour">{wind} mph</div>
        </Col>
      </Row>
    </Col>
  );
};

export default Hour;
