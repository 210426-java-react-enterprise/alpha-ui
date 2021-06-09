import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import SearchBar from "./components/SearchBar";
import SignOut from "./components/SignOut";


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
          <SearchBar />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
