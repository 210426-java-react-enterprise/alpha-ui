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
        <Col xs={10} md={6} lg={3} className="mt-4 p-2 bg-light border border-rounded">
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
          <Current show={show} city={searchedCity} data={data} />
        </Col>
      </Row>
    </>
  );
};

export default SearchBar;
