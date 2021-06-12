import {Col, Nav, Row} from "react-bootstrap";
import {getEvents} from "../../remote/events-connection";
import {useSelector,useDispatch} from "react-redux";
import {eventState,isLoading,isLoaded,showData} from "../../features/eventsData/eventsSlice";
import {useEffect} from "react";

export default function Event() {

    const dispatch = useDispatch();
    const event = useSelector(eventState);

    useEffect(() => {
        dispatch(isLoading())
        getEvents().then(res => {
            dispatch(isLoaded({data: res}));
            dispatch(showData());
        }).catch(e => console.log(e))
    },[])


    return (
        <>
            <Row>
                <Col
                    className="d-flex justify-content-center align-items-center bg-dark p-2 ml-3 mr-3 mt-2 border border-dark">
                    <div id="thh">
                        Events
                    </div>
                </Col>
            </Row>
            <table className="table table-dark table-hover table-striped">
                <thead>
                <tr>
                    <th id="th" scope="col">Title</th>
                    <th id="th" scope="col">Date</th>
                    <th id="th" scope="col">Description</th>
                    <th id="th" scope="col">Link</th>
                </tr>
                </thead>
                <tbody>
                {event.data.map((row,i) => {
                   return <tr key = {i}>
                        <td>{row.event_title}</td>
                        <td>{row.event_date}</td>
                        <td>{row.event_description}</td>
                        <td>{row.event_url}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </>
    )
}
