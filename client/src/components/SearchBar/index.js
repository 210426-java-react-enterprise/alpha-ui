import { Row, Col, Form, Button } from "react-bootstrap";
import { currentWeather, oneCall } from "../../utilities/weatherCalls";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoading, loadCurrent, loadDaily, isLoaded, weatherState } from "../../features/weatherData/weatherSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const weather = useSelector(weatherState);

  const [city, setCity] = useState({
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCity({ ...city, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(isLoading());
    currentWeather(city.city).then((res) => {
      dispatch(loadCurrent({ data: res, city: city.city }));
      setCity({city: ""});
      return oneCall(res.lat, res.lon).then(response => {
        dispatch(loadDaily({ data: response }));
        dispatch(isLoaded());
      }).catch(err => console.log(err));
    });
  };

  return (
    <>
      <Row>
        <Col id="searchBar" className="mt-4 p-2 bg-light border">
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
          <Button style={{ backgroundColor: "#0beeff", border: "none" }} onClick={handleSubmit}>Search</Button>
        </Col>
      </Row>
    </>
  );
};

export default SearchBar;
