import { Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";

const Register = () => {
  const [loginCreds, setLoginCreds] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({ ...loginCreds, [name]: value });
    console.log(loginCreds);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginCreds);
  };

  return (
      <>
          <Row>
              <Col>
              <h1>Register</h1>
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
            <Form.Group>
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={loginCreds.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </Form.Group>
            <Button onClick={handleSubmit} variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
