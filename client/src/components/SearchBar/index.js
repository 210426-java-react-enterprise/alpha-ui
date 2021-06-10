import { Row, Col, Form, Button } from "react-bootstrap";
import Current from "../Main/Current";
import { currentWeather } from "../../utilities/weatherCalls";
import { useState } from "react";
import SevenDay from "../Main/Forecast_Daily";

const SearchBar = () => {
  const [city, setCity] = useState({
    city: "",
  });

  const [data, setdata] = useState({});
  const [searchedCity, setSearchedCity] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCity({ ...city, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    currentWeather(city.city).then((res) => {
      setdata(res);
      setCity({ city: "" });
      setSearchedCity(city.city);
      setShow(true);
    });
  };

  return (
    <>
      <Row>
        <Col lg={4} id="searchBar" className="mt-4 p-2 bg-light border">
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                id="city"
                name="city"
                value={city.city}
                onChange={handleChange}
                placeholder="Enter City"
              />
            </Form.Group>
          </Form>
          <Button onClick={handleSubmit}>Search</Button>
        </Col>
        <Col lg={8}>
          <Current show={show} city={searchedCity} data={data} />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <SevenDay data={data} show={show} />
        </Col>
      </Row>
    </>
  );
};

export default SearchBar;
