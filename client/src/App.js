import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import SearchBar from "./components/SearchBar";
import SignOut from "./components/SignOut";


function App() {
  
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col lg={10}>
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
          <SearchBar />
        </Col>
      </Row>
        </Col>
      </Row>
      
    </Container>
  );
}

export default App;
