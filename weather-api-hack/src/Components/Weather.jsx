import React ,{useEffect, useState}from 'react';
import sunCloudImage from '../assets/Sun cloud angled rain.png';
import rainImage from '../assets/noun-rain-2438520 1.png';
import humidityImage from '../assets/noun-humidity-151847 1.png';
import windImage from '../assets/noun-wind-4507827 1.png';
import hourlyImage from '../assets/Group 650.png';
import './Weather.css';


const Weather=()=>{
  const [weatherData, setWeatherData]=useState(false);
const [cityName, setcityName]=useState("");
const allIcons={
  "01d":sunCloudImage,
  "01n":sunCloudImage,
}

const search =async(cityName)=>{

  try{
    const apiKey = import.meta.env.VITE_APP_KEY;  // Get the API key from the .env file
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    
    
console.log("API Key:", apiKey);


const response=await fetch (url);
const data=await response.json();
console.log(data);
const icon=allIcons[data.weather[0].icon] || sunCloudImage;
setWeatherData({
  humidity:data.main.humidity,
  windspeed:data.wind.speed,
  temperature:Math.floor(data.main.temp),
  location:data.name,
  icon:icon

})
  }
  catch{

  }
}

useEffect(()=>{
  search("Lebanon");
},[])
  return (
    <div className="app">
      <header className="header">
        <h2>Lebanon</h2>
        <div class="search">
        <input type="text" placeholder="Search by country" class="search-input" />
        <button className="search-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
        </div>
      </header>

      <div className="current-weather">
        <div className="icon-section">
          <div className="weather-icon">
           
            <img src={sunCloudImage} alt="weather icon" />
          </div>
          <div className="temperature">{weatherData.temperature}°</div>
          <div className="details">
            <p>Precipitations</p>
            <p>Max.: 19° Min.: 14°</p>
          </div>
        </div>
        <div className="big-stats">
          <div className="stats">
            <div className="stat">
              <img src={rainImage} alt="rain" />
              <p>35%</p>
            </div>
            <div className="stat">
              <img src={humidityImage} alt="humidity" />
              <p>60%</p>
            </div>
            <div className="stat">
              <img src={windImage} alt="wind" />
              <p>8 km/h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hourly-weather">
        <h3>Today</h3>
        <div className="hourly-cards">
          {/* Repeating hourly weather cards */}
          <div className="hour-card">
            <p>29°C</p>
            <img src={hourlyImage} alt="hourly weather" />
            <p>15:00</p>
          </div>
          <div className="hour-card">
            <p>29°C</p>
            <img src={hourlyImage} alt="hourly weather" />
            <p>16:00</p>
          </div>
          <div className="hour-card">
            <p>29°C</p>
            <img src={hourlyImage} alt="hourly weather" />
            <p>17:00</p>
          </div>
          <div className="hour-card">
            <p>29°C</p>
            <img src={hourlyImage} alt="hourly weather" />
            <p>18:00</p>
          </div>
          <div className="hour-card">
            <p>29°C</p>
            <img src={hourlyImage} alt="hourly weather" />
            <p>19:00</p>
          </div>
          <div className="hour-card">
            <p>29°C</p>
            <img src={hourlyImage} alt="hourly weather" />
            <p>20:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
