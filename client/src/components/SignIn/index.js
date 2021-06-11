import { Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {loggedIn, authState} from "../../features/auth/authSlice";

const SignIn = ({handleClose}) => {

  const dispatch = useDispatch();
  const auth = useSelector(authState);

  const [loginCreds, setLoginCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleSubmit = (e) => {
    // use auth service for login
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/login", loginCreds)
      .then((res) => {
        console.log("response login: ", res);
        dispatch(loggedIn({username: res.data.username}));
        setLoginCreds({
          username: "",
          password: ""
        })
        handleClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Row>
      <Col lg={6}>
        <Row>
          <Col>
            <h1>Sign In</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Control
                  type="email"
                  id="username"
                  name="username"
                  value={loginCreds.username}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  value={loginCreds.password}
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
};

export default SignIn;
