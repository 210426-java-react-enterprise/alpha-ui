import './App.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Register from "./components/Register"
import SignIn from "./components/SignIn" 

function App() {

  return (
    <Container>
      <Row>
        <Col>
        <Register />
        </Col>
        <Col>
        <SignIn />
        </Col>
      </Row>
      <Row>
        <Col>
          
        </Col>
      </Row>
    </Container>
  );
}

export default App;
