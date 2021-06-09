import { Row, Col, Button } from "react-bootstrap";
import Day from "./day";
import { oneCall } from "../../../utilities/weatherCalls";
import { useRef, useState } from "react";

const SevenDay = ({ data }) => {
  const response = useRef([]);
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    oneCall(data.lat, data.lon).then((res) => {
      console.log("response one call: ", res.sevenDay);
      response.current = res.sevenDay;
      console.log("response.current: ", response.current);
      setShow(true);
    });
  };
  return (
    <>
      <Row>
        <Col>
          <Button onClick={handleClick}>7 Day Forecast</Button>
        </Col>
      </Row>
      {show && (
        <Row className="bg-light border mt-3">
          {response.current.map((day, i) => {
            return (
              <Day
                key={i}
                max_temp={day.max_temp}
                min_temp={day.min_temp}
                dt={day.dt}
                humidity={day.humidity}
                pressure={day.pressure}
                icon={day.icon}
                uvi={day.uvi}
                wind={day.wind}
              />
            );
          })}
        </Row>
      )}
    </>
  );
};

export default SevenDay;
