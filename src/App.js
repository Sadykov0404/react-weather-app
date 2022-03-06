import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./Components/CityComponent";
import WeatherComponent from "./Components/WeatherInfoComponent";
import first from "./assets/icons/sunny.svg";
import first1 from "./assets/icons/night.svg";
import second from "./assets/icons/day.svg";
import second2 from "./assets/icons/cloudy-night.svg";
import third from "./assets/icons/cloudy.svg";
import third3 from "./assets/icons/cloudy.svg";
import four from "./assets/icons/perfect-day.svg";
import four4 from "./assets/icons/cloudy-night.svg";
import nine from "./assets/icons/rain.svg";
import nine9 from "./assets/icons/rain-night.svg";
import ten from "./assets/icons/rain.svg";
import ten10 from "./assets/icons/rain-night.svg";
import eleven from "./assets/icons/storm.svg";
import eleven11 from "./assets/icons/storm.svg";

const API_KEY = "a4d63ec54b287bff783c84ba09367bae";

export const WeatherIcons = {
  "01d": first,
  "01n": first1,
  "02d": second,
  "02n": second2,
  "03d": third,
  "03n": third3,
  "04d": four,
  "04n": four4,
  "09d": nine,
  "09n": nine9,
  "10d": ten,
  "10n": ten10,
  "11d": eleven,
  "11n": eleven11,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: #fff;
  font-family: Montserrat;
`;
// const CityComponent = styled.div`
//   display: flex;
//   flex-direction: colunm;
// `;
const WheatherComponent = styled.div`
  display: flex;
  flex-direction: colunm;
`;
const AppLabel = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 18px;
  font-family: Montserrat;
`;

const App = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    setWeather(response.data);
    console.log(response)
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {/* <CityComponent/> */}
      {weather ? (
        <CityComponent weather={weather} />
      ) : (
        <WeatherComponent setCity={setCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
};

export default App;
