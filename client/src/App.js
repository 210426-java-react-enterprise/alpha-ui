import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { currentWeather } from "./utilities/weatherCalls";


function App() {

  const testCall = () => {

    currentWeather("Denver");

  }

  return (
    <Container>
      <Row>
        <Col>
        <Button onClick={testCall}>TEST CALL</Button>
        
        </Col>
      </Row>
  </Container>  

  );
}

export default App;
