import React from "react";
import axios from "axios";
import PaintWeather from "./paintweather";

const API_KEY = "9afee29ae5bb3f223c30d6482bb8701d";

class Weather extends React.Component {
  state = {
    lat: null,
    lon: null,
    isLoading: true,
  };

  componentDidMount() {
    this.getGetLocation();
  }

  saveLoc = (geoObj) => {
    this.setState({ lat: geoObj.lat, lon: geoObj.lon });
  };

  getGetLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.getLocObj(position.coords.latitude, position.coords.longitude);
    });
  };

  getLocObj = (lat, lon) => {
    const geoObj = {
      lat,
      lon,
    };
    this.saveLoc(geoObj);
    this.getWeather();
  };

  getWeather = async () => {
    const { lat } = this.state;
    const { lon } = this.state;
    const db = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const {
      data: {
        main: { temp },
      },
    } = db;
    const {
      data: { name },
    } = db;
    this.setState({ temp, name, isLoading: false });
    console.log(this.state);
  };

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      "Loading..."
    ) : (
      <PaintWeather temp={this.state.temp} name={this.state.name} />
    );
  }
}
export default Weather;
