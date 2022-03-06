import React from "react";
import styled from "styled-components";
import logo from "../assets/icons/perfect-day.svg";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const ChooseCityLabel = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;
const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: black solid 1px;
  color: black;
  fonst-size: 18px;
  font-weight: bold;
  margin: 20px auto;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }
  & button {
    padding: 10px;
    font-size: 14px;
    color: #fff;
    background: #000;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

const WeatherComponent = ({ fetchWeather, setCity }) => {
  return (
    <>
      <WeatherLogo src={logo} />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input placeholder="City" onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default WeatherComponent;
