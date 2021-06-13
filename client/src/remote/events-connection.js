import { serverConnection } from "./server-connection";

export const getEvents = async () => {
  let events;
  await serverConnection
    .get("/events")
    .then((res) => {
      events = res.data;
    })
    .catch((e) => console.log(e));
  console.log(events);
  return events;
};

export const getEventsByCityAndState = async (search) => {
  console.log("searchCreds: ", search);
  let response = await serverConnection.post(`/events/location`, search);
  console.log("Events data: ", response);
  return await response.data;
};

export const saveEvent = async (event) => {
    let obj = {
        eventTitle: event.eventTitle,
        eventUrl: event.eventUrl,
        eventDate: event.eventDate
    }
    let headers = {
        'Authorization': event.token
    }
    let response = await serverConnection.post('/events/save', obj, {
        headers: headers
    });
    return await response.data;
}
