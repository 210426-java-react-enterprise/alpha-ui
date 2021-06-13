import axios from 'axios';


export const getEvents = async () => {

    let events;
    await axios.get('http://localhost:5000/events').then((res) => {
        events = res.data;
    }).catch(e => console.log(e));
    console.log(events)
    return events;
}

