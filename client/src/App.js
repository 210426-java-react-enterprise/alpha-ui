import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { currentWeather } from "./utilities/weatherCalls";


function App() {

  const testCall = () => {

    currentWeather(40, -105);

  }

  return (
    <Container>
      <Row>
        <Col>
        <Button onClick={testCall}></Button>
        
        </Col>
      </Row>
  </Container>  

  );
}

export default App;
