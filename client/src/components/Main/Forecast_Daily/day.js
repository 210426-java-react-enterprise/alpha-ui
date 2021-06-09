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

  
  let a = new Date(dt * 1000);
  let date = a.getDate();
  let month = a.getMonth();
  let year = a.getFullYear();
  console.log("date: " + date + "/" + month + "/" + year);
 
  

  return (
    
      <Col className="m-2 border bg-white">
        <Row>
          <Col>{dt}</Col>
        </Row>
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
        
      </Col>
    
  );
};

export default Day;
