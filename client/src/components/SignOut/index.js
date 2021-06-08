import { Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";

const SignOut = () => {
  const [loginCreds, setLoginCreds] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCreds.username = "", loginCreds.password = ""
    console.log(loginCreds);
  };

  return (
    <>
      <Row>
        <Col>
          <h1>Sign Out</h1>
        </Col>
      </Row>
      <Row>
        <Col>
            <Button onClick={handleSubmit} variant="primary" type="submit">
              LogOut
            </Button>
        </Col>
      </Row>
    </>
  );
};

export default SignOut;
