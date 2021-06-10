import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import SearchBar from "./components/SearchBar";
import SignOut from "./components/SignOut";
import { weatherState } from "./features/weatherData/weatherSlice";
import { useSelector } from "react-redux";
import Current from "./components/Main/Current";
import Loader from './components/Loader';
import SevenDay from "./components/Main/Forecast_Daily";

function App() {
  const weather = useSelector(weatherState);

  return (
    <Container fluid>
      <Row style={{ height: "100vh" }} className="d-flex justify-content-center">
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
          <Row>
            {weather.isLoading && (
              <Col className="d-flex justify-content-center align-items-center">
                <Loader />
              </Col>
            )}
            {weather.isLoaded && (
              <Col>
                <Current />
              </Col>
           )} 
          </Row>
          <Row>
            {weather.isLoaded &&
            <Col>
            <SevenDay />
            </Col>
            }
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
