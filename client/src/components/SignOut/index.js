import { Row, Col, Button} from "react-bootstrap";
import { useState } from "react";
import {authState, loggedOut} from "../../features/auth/authSlice";
import {useDispatch, useSelector} from "react-redux";

const SignOut = () => {
    const dispatch = useDispatch;
    const auth = useSelector(authState);
    const logout = (e) =>{
        localStorage.clear();
        dispatch(loggedOut());
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
