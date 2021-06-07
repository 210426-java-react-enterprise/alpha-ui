import { Row, Col } from "react-bootstrap";

const Current = ({ data }) => {
    
    return (
        <>
        <Row>
            <Col>
               Tempurature: {data.temp}
            </Col>
            </Row>
            <Row>
                <Col>
                Humidity: {data.humidity}
                </Col>
            </Row>
            <Row>
                <Col>
                Pressure: {data.pressure}
                </Col>
            </Row>
            <Row>
                <Col>
                Description: {data.description}
                </Col>
            </Row>
            <Row>
                <Col>
                Wind: {data.wind}
                </Col>
            </Row>
        </>
    )
}

export default Current;