import { Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";

const SignIn = () => {
  const [loginCreds, setLoginCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({ ...loginCreds, [name]: value });
    console.log(loginCreds);
  };

  const handleSubmit = (e) => {
    // use auth service for login
    e.preventDefault();
    // TODO IMPLEMENT SERVICE CALL FOR LOGIN FUNCTIONALITY
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
