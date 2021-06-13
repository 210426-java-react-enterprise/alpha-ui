<<<<<<< Updated upstream
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import { weatherState } from "./features/weatherData/weatherSlice";
import { useSelector } from "react-redux";
import Current from "./components/Main/Current";
import Loader from "./components/Loader";
import SevenDay from "./components/Main/Forecast_Daily";
import NavBar from "./components/Main/NavBar";
import Events from "./components/Events";
import { authState } from "./features/auth/authSlice";
import EventSearch from "./components/EventSearch";
import TwelveHour from "./components/Main/Forecast_Hourly";

function App() {
  const weather = useSelector(weatherState);
  const auth = useSelector(authState);

  return (
    <Router>
      <Container fluid>
        <Row
          style={{ height: "100vh" }}
          className="d-flex justify-content-center"
        >
          <Col lg={10}>
            <Row>
              <Col>
                <NavBar />
              </Col>
            </Row>
            <Row className="m-3">
              <Col>
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
              </Col>
              <Col className="d-flex justify-content-center align-items-center m-3">
                <img
                  src="/alphaLogo.png"
                  width="50%"
                  alt="alphacast logo"
                ></img>
              </Col>
            </Row>

            <Row>
              {weather.isLoaded && (
                <Col>
                  <TwelveHour />
                </Col>
              )}
            </Row>
            <Row>
              {weather.isLoaded && (
                <Col>
                  <SevenDay />
                </Col>
              )}
            </Row>
            <Row>
              <Col>{auth.isAuthenticated && <Events />}</Col>
            </Row>

            <Switch>
              <Route path="/events">
                <EventSearch />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
