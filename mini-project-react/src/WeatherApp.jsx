import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
  const [weatherInfo,setWeatherInfo]=useState({
    city:"Delhi",
    feelsLike: 36.93,
    temp:35.82,
    tempMax:35.82,
    tempMin:35.83,
    humidity:34,
    weather:"overcast clouds"
  });

  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return (
    <div style={{textAlign:"center"}}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo}/>
    </div>
  )
}