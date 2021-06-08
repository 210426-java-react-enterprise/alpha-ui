import { Row, Col } from "react-bootstrap";

const Current = ({ data, city }) => {
    
    return (
        <>
            <Row>
                <Col>
                    <h1>{city}</h1>
                </Col>
            </Row>
        <Row>
          <Col>Tempurature: {data.temp} &deg;F</Col>
        </Row>
        <Row>
          <Col>Humidity: {data.humidity}%</Col>
        </Row>
        <Row>
          <Col>Pressure: {data.pressure} mlB</Col>
        </Row>
        <Row>
          <Col>Description: {data.description}</Col>
        </Row>
        <Row>
          <Col>Wind: {data.wind} mph</Col>
        </Row>
      </>
    );
}

export default Current;