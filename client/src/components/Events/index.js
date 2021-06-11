import {connect, useSelector} from "react-redux";
import {Col, Nav, Row} from "react-bootstrap";
import {eventsState} from "../../features/events/eventsSlice";
import {authState} from "../../features/auth/authSlice";

const Events = ({show, onClick}) => {
    const event = useSelector(eventsState);
    const auth = useSelector(authState);

    return (
        <Row>
            <Col>

            </Col>
        </Row>
    )
};

export default Events;