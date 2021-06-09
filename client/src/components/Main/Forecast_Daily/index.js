import { Row, Col, Table } from "react-bootstrap";
import Day from "./day";
import { oneCall } from "../../../utilities/weatherCalls";
import { useRef } from "react";

const SevenDay = ({ data, show }) => {
  const response = useRef([]);
  if (show) {
    oneCall(data.lat, data.lon).then((res) => {
      console.log("response one call: ", res.sevenDay);
        response.current = res.sevenDay;
        console.log("response.current: ", response.current);
    });
  }
  return (
    <Row>
      {show && (
        <Col className="d-flex">
          {(response.current).map((day, i) => {
              return <Day key={i}
              max_temp={day.max_temp}
              min_temp={day.min_temp}
              dt={day.dt}
              humidity={day.humidity}
              pressure={day.pressure}
              icon={day.icon}
              uvi={day.uvi}
              wind={day.wind}
            />;
          })}
        </Col>
      )}
    </Row>
  );
};

export default SevenDay;
