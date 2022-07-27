import styled from 'styled-components'

export const WeatherInfoIcons = {
    sunset: "/icon/temp.svg",
    sunrise: "/icon/temp.svg",
    humidity: "/icon/humidity.svg",
    wind: "/icon/wind.svg",
    pressure:"/icon/pressure.svg",
};

export const WeatherIcons ={
    "01d":"/icon/sunny.svg",
    "01n":"/icon/night.svg",
    "02d":"/icon/day.svg",
    "02n":"/icon/day.svg",
    "03d":"/icon/cloudy-night.svg",
    "03n":"/icon/cloudy.svg",
    "04d":"/icon/perfect-day.svg",
    "04n":"/icon/cloudy-night.svg",
    "09d":"/icon/rain.svg",
    "09n":"/icon/rain-night.svg",
    "10d":"/icon/rain.svg",
    "10n":"/icon/rain-night.svg",
    "11d":"/icon/storm.svg",
    "11n":"/icon/storm.svg",
    "13d":"icon/snow/.png",
    "13n":"icon/snow-night.svg",
    "50d":"icon/mist.svg",
    "50n":"icon/mist-night.png",

};



const WeatherCondition = styled.div`
display: flex;
flex-direction: row;
align-items:center;
width:100%;
justify-content: space-between;
margin: 30px auto;
`;

const Condition = styled.span`
display:flex;
flex-direction:row;


`;

const WeatherLogo = styled.img`
width:100px;
height:100px;
margin: 5px auto;
`;

const Location = styled.span`
font-size: 28px;
font-weight: bold;

`;

const WeatherInfoLabel = styled.span`
font-size: 14px;
font-weight: bold;
margin:20px 25px 10px;
text-algin:start;
width:90%;
`;

const WeatherInfoContainer = styled.div`
display:flex;
width:90%;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
flex-wrap:wrap;
`;

const InfoContainer = styled.div`
display:flex;
margin:5px 10px;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
`;

const InfoIcon = styled.img`
width:36px;
height:36px;
`;

const Infolabel = styled.span`
display:flex;
flex-direction:column;
font-size:14px;
margin:15px;
& span {
    font-size: 12px;
    text-transform:capitalize;
}
`;

const SearchBox = styled.form`


display:flex;
flex-direction: row;
border: black solid 1px;
border-radius: 2px;
color:black;
font-size:18px;
font-weight:bold;
margin: 10px auto;
& input{
    padding: 10px;
    font-size:14px;
    border:none;
    outline:none;
    font-weight:bold;
}


& button{
    padding: 10px;
    width:150px;
    font-size:18px;
    color:white;
    background-color:black;
    border:none;
    outline:none;
    font-weight:bold;
    cursor:pointer;
}
`;




const WeatherInfoComponent =(props)=>{
    
    
 
    const {name, value} =props;
    return(
        <InfoContainer>
        <InfoIcon src={WeatherInfoIcons[name]}/>
        <Infolabel>
        {value}
        <span>{name}</span>
        </Infolabel>
        
        </InfoContainer>
    )
}

const WeatherComponent = (props)=> {

    function refreshPage (){
        window.location.reload(false)
     }
    const{weather} = props;
    const isDay = weather?.weather[0].icon?.includes("d");
    const getTime = (timeStamp)=> {
    return `${new Date().getHours()} : ${new Date().getMinutes()}`;
    };
    console.log(weather);
    return (
        <>
        <WeatherCondition>
        <Condition>
        <span> {`${Math.floor(weather?.main?.temp - 273)}°C`}<sub>{`| ${weather?.weather[0].description}`}</sub></span>
         </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]} />
        
               </WeatherCondition>
        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
        <WeatherInfoContainer>

        <WeatherInfoComponent name={isDay?"sunset":"sunrise"} value={getTime(weather?.sys[isDay?"sunset" : "sunrise"])}/>
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity}/>
        <WeatherInfoComponent name="wind" value={weather?.wind?.speed}/>
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure}/>
        
       
        </WeatherInfoContainer>
    
      
        

        <SearchBox onClick={refreshPage}>
       
        <button>Reset</button>
        </SearchBox>
        </>
        
      
    );
};

export default WeatherComponent;
