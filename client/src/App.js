import './App.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Register from "./components/Register"
import SignIn from "./components/SignIn"
import SearchBar from "./components/SearchBar"
import SignOut from ".components/SignOut"

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
          <h1>Current Weather</h1>
          <SearchBar />
        </Col>
      </Row>
    </Container>
  );
}

export default App;