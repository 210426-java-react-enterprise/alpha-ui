
export class User {

    constructor(username , password, email, state, city, firstname, lastname) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.state = state;
        this.city = city;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

export class Event {

    constructor(user_id, event_url, event_date, event_title,event_description,event_id) {
        this.user_id = user_id;
        this.event_url = event_url;
        this.event_date = event_date;
        this.event_title = event_title;
        this.event_description = event_description;
        this.event_id = event_id;
    }

}

export class CurrentWeather {

    constructor(description, icon, temp, pressure, humidity, wind, lat, lon) {
        this.description = description;
        this.icon = icon;
        this.temp = temp;
        this.pressure = pressure;
        this.humidity = humidity;
        this.wind = wind;
        this.lat = lat;
        this.lon = lon;
    }

}

export class DailyWeather {

    constructor(max_temp, min_temp, dt, pressure, humidity, wind, description, icon, uvi) {
        this.max_temp = max_temp;
        this.min_temp = min_temp;
        this.dt = dt;
        this.pressure = pressure;
        this.humidity = humidity;
        this.wind = wind;
        this.description = description;
        this.icon = icon;
        this.uvi = uvi;
    }
}


