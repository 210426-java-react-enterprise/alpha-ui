import { Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {register} from "../../remote/registration-service"
import {
  isLoading,
  loggedIn,
  loggedOut,
  authState,
} from "../../features/auth/authSlice";

const Register = ({handleClose}) => {
  const dispatch = useDispatch();
  const auth = useSelector(authState);

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    wantsWeeklyUpdates: true,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(isLoading());
    console.log(userInfo);
    let clear = true;

    register(userInfo)
      .then((user) => {
        console.log(user);
        setUserInfo({
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          email: "",
          city: "",
          state: "",
          wantsWeeklyUpdates: true,
        });
        dispatch(
          loggedIn({
            username: user.body.username,
            token: "",
          })
        );
        handleClose();
      })
      .catch((e) => {
        console.log(e.response.status);
        if (e.response.status === 409) {
          alert(`${e.response.data} is already taken!`); //could be a nicer alert section on page
        } else if (e.response.status === 406) {
          alert(`${e.response.data} is not a valid location!`); //could be a nicer alert section on page
        }
        document.getElementById(e.response.data).focus();
      });
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
                type="text"
                id="firstname"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleChange}
                placeholder="Enter Firstname"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                id="lastname"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
                placeholder="Enter Lastname"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                id="username"
                name="username"
                value={userInfo.username}
                onChange={handleChange}
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                id="password"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="state"
                id="state"
                name="state"
                value={userInfo.state}
                onChange={handleChange}
                placeholder="State"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="city"
                id="city"
                name="city"
                value={userInfo.city}
                onChange={handleChange}
                placeholder="City"
              />
            </Form.Group>
              <p>Would you like to recieve weekly weather updates from AlphaCast?</p>
              <Form.Check
                inline
                label="Yes, please!"
                name="wantsWeeklyUpdates"
                type="radio"
                checked="true"
                id={`inline-radio-1`}
                onChange={handleChange}
      
              />
              <Form.Check
                inline
                label="No, thank you."
                name="wantsWeeklyUpdates"
                type= "radio"
                checked="false"
                id={`inline-radio-2`}
                onChange={handleChange}
              />
              <br/>
            
            <Button onClick={handleSubmit} variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
