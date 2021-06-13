import {Row, Col, Button} from "react-bootstrap";
import EventSearchForm from "./Form";
import {useSelector, useDispatch} from "react-redux";
import {eventState, savedEvent} from "../../features/eventsData/eventsSlice";
import {authState} from "../../features/auth/authSlice";
import {saveEvent} from "../../remote/events-connection";
import Loader from '../Loader';


const EventSearch = () => {
    const event = useSelector(eventState);
    const auth = useSelector(authState);
    const dispatch = useDispatch();

    const saveEventOnClick = (e) => {
        e.preventDefault();
        let targetBtnId = e.target.attributes[0].value;
        let parentEl = e.target.parentElement.parentElement.children;
        let splitLink = parentEl[2].innerHTML.split(">");
        let splitLink2 = splitLink[1].split("<");
        let link = splitLink2[0].toString();
        let btn = document.getElementById(targetBtnId);
        btn.style.display = "none";

        let obj = {
            eventTitle: parentEl[0].innerHTML,
            eventDate: parentEl[1].innerHTML,
            eventUrl: link,
            token: auth.token
        }

        saveEvent(obj).then(res => {
            console.log(res);
            dispatch(savedEvent({event: res.data}));

        }).catch(err => console.error(err));

        console.log("wezley: ", obj);
    }

    const dateConverter = (unix) => {
        let a = new Date(unix).toString();
        return a;
    };
    return (
        <>
            {event.isShown && (
            <Row>
                    <Col>
                        <EventSearchForm/>
                    </Col>
            </Row>
            )}
            {event.isLoading && <Loader/>}
            {event.isShown && (
                <Row>
                    <Col>
                        <Row>
                            <Col
                                className="d-flex justify-content-center align-items-center bg-dark p-2 ml-3 mr-3 mt-2 border border-dark">
                                <div id="thh">Events</div>
                            </Col>
                        </Row>
                        <table className="table table-dark table-hover table-striped">
                            <thead>
                            <tr>
                                <th id="th" scope="col">
                                    Title
                                </th>
                                <th id="th" scope="col">
                                    Date
                                </th>
                                <th id="th" scope="col">
                                    Link
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {event.searchedEvents.map((row, i) => {
                                return (
                                    <tr id={"event-" + i} key={i}>
                                        <td>{row.event_title}</td>
                                        <td>{dateConverter(row.event_date)}</td>
                                        <td>
                                            <a target="_blank" href={row.event_url}>
                                                {row.event_url}
                                            </a>
                                        </td>
                                        <td><Button disabled={false} id={"btn-" + i}
                                                    onClick={saveEventOnClick}>Save</Button></td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default EventSearch;
