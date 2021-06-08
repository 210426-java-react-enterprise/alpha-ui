import { Row, Col, Form, Button } from "react-bootstrap";
import Current from "../Main/Current";
import { currentWeather } from "../../utilities/weatherCalls";
import { useState } from "react";

const SearchBar = () => {
  const [city, setCity] = useState({
    city: "",
  });

  const [data, setdata] = useState({});
  const [searchedCity, setSearchedCity] = useState("");

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
    });
  };

  return (
    <>
      <Row>
        <Col lg={3}>
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
      </Row>
      <Row>
        <Col>
          <Current city={searchedCity} data={data} />
        </Col>
      </Row>
    </>
  );
};

export default SearchBar;
