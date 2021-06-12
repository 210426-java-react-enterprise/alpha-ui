import {Row, Col, Button, Form} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {loggedIn, authState} from "../../features/auth/authSlice";
import GetEvents from "../../remote/events-connection";

const SignIn = ({handleClose}) => {

    const dispatch = useDispatch();
    const auth = useSelector(authState);

    const [loginCreds, setLoginCreds] = useState({
        id: 0,
        username: '',
        password: '',
    });
    const [availableEvents, setAvailableEvents] = useState({
        event_id: "",
        event_date: "",
        user_id: "",
        event_description: "",
        event_title: "",
        event_url: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginCreds({...loginCreds, [name]: value});
    };

    const handleSubmit = (e) => {
        // use auth service for login
        e.preventDefault();
        axios
            .post("http://localhost:5000/auth/login", loginCreds)
            .then((res) => {
                // console.log("response login: ", res.data);
                dispatch(loggedIn({username: res.data.username,token: res.data.token}));
                setLoginCreds({
                    id: res.data.id,               //strange, won't set
                    username: res.data.username,
                    password: res.data.password
                });
                // console.log(loginCreds);
                handleClose();

            }).catch((err) => console.log(err));

    const handleClick = (e) => {
        axios.get("http://localhost:5000/events", auth.token).then((res) => {
            console.log("events: ", res);
            setAvailableEvents({
                event_id: "",
                event_date: "",
                user_id: "",
                event_description: "",
                event_title: "",
                event_url: ""
            })
        }).catch(e => console.log(e));
    }
    }
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
