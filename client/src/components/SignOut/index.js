import { Row, Col, Button} from "react-bootstrap";
import { useState } from "react";

const SignOut = () => {
    const logout = (e) =>{
        localStorage.clear();
        window.location.href = '/';
    }

  return (
    <>
      <Row>
        <Col>
          <h1>Sign Out</h1>
        </Col>
      </Row>
      <Row>
        <Col>
            <Button onClick={this.logout()} variant="primary" type="submit">
              LogOut
            </Button>
        </Col>
      </Row>
    </>
  );
};

export default SignOut;
