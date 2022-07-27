import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import React, { useState } from 'react';

//import {BigButton, SmallButton} from './Back';

 

import axios from 'axios';

const API_KEY ="e7b25098ca52eecc17fba890872d2e33";

const Container =styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 380px;
background: white;
`;

const AppLabel =styled.span`
color:black;
font-size: 20px;
font-weight: bold;
`;

// const CityComponent = styled.div`
// display: flex;
// flex-direction:column;

// `;
// const WeatherComponent = styled.div`
// display: flex;
// flex-direction:column;

// `;




function App() {
  const [city, updateCity]= useState();
  const [weather, updateWeather] = useState();


  const fetchWeather = async (e)=> {
    e.preventDefault();
    const response = 
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    updateWeather(response.data);
    console.log(weather);
  };
  return (
    <Container>
    <AppLabel>React Weather App</AppLabel>
      
      {weather? (
        <WeatherComponent weather={weather}/>
      ) : (
            <CityComponent updateCity= {updateCity} fetchWeather={fetchWeather}/>
      )}
    </Container>
    
  );
}

export default App;


