
export class User {

    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

}

export class Event {

    constructor(user_id, event_url, event_date, event_title) {
        this.user_id = user_id;
        this.event_url = event_url;
        this.event_date = event_date;
        this.event_title = event_title;
    }

}

export class CurrentWeather {

    constructor(city_id, description, icon, temp, pressure, humidity, wind) {
        this.city_id = city_id;
        this.description = description;
        this.icon = icon;
        this.temp = temp;
        this.pressure = pressure;
        this.humidity = humidity;
        this.wind = wind;
    }

}