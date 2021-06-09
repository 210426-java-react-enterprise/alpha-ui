import {Row, Col, Button, Form} from "react-bootstrap";
import {useState} from "react";
import {register} from "../../remote/registeration-service";
import {User} from "../../utilities/models/models";
import {validate} from "../../remote/validation-service";

const Register = () => {
    const [userInfo, setUserInfo] = useState(new User('', '', '', '', ''));

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserInfo({...userInfo, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo);
        let clear = true;
        validate(userInfo).then(() => {
                console.log(`registering user ${userInfo}`);
                register(userInfo).then(user => console.log(user)).catch(e => {
                    console.log(e)});
        }).catch(e => {
            console.log(e.response.status)
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
