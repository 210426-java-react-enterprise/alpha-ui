import { Row, Col, Form, Button } from "react-bootstrap";
import { getEventsByCityAndState } from "../../../remote/events-connection";
import { useDispatch } from "react-redux";
import { loadEvents, isLoading, showData } from "../../../features/eventsData/eventsSlice";
import { useState } from "react";

const EventSearchForm = () => {

    const dispatch = useDispatch();
    
    const [searchCreds, setSearchCreds] = useState({
        city: "",
        state: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchCreds({ ...searchCreds, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(isLoading());
        getEventsByCityAndState(searchCreds).then(res => {
            dispatch(loadEvents({ data: res }));
            dispatch(showData());
        }).catch(err => console.error(err));
    }

    return (
      <Row>
        <Col lg={6}>
          <Row>
            <Col>
              <h1>Search for Local Events!</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="city"
                    name="city"
                    value={searchCreds.city}
                    onChange={handleChange}
                    placeholder="Enter City"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="state"
                    name="state"
                    value={searchCreds.state}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
}

export default EventSearchForm;