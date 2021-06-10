import { Row, Col } from "react-bootstrap";

const Current = ({ data, city, show }) => {
  const imgIcon = `/icons/${data.icon}.png`;

  return (
    <>
      {show && (
        <Row>
          <Col xs={10} md={6} leg={5}>
            <Row className="d-flex">
              <Col>
                <div className="cityCurrent">{city}</div>
                <div className="tempCurrent">{data.temp} &deg;F</div>
              </Col>
              <Col>
                <Row>
                  <Col className="d-flex justify-content-center align-items-center">
                    <img className="imgIcon" src={imgIcon}></img>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="descriptionCurrent">{data.description}</div>
                  </Col>
                </Row>
              </Col>
              <Col className="p-4">
                <Row>
                  <Col>
                    <div className="humidityCurrent">
                      Humidity: {data.humidity}%
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="pressureCurrent">
                      Pressure: {data.pressure} mlB
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>
                    <div className="windCurrent">Wind: {data.wind} mph</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Current;
