import React ,{useState}from 'react';
import sunCloudImage from '../assets/Sun cloud angled rain.png';
import rainImage from '../assets/noun-rain-2438520 1.png';
import humidityImage from '../assets/noun-humidity-151847 1.png';
import windImage from '../assets/noun-wind-4507827 1.png';
import hourlyImage from '../assets/Group 650.png';
import searchBar from '../assets/icon _Search.png';
import './Weather.css';


const Weather=()=>{
  const [weatherData, setweatherData]=useState("")
const [cityName, setcityName]=useState("")

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
            {/* I changed this to button */}
            <img src={sunCloudImage} alt="weather icon" />
          </div>
          <div className="temperature">28°</div>
          <div className="details">
            <p>Precipitations</p>
            <p>Max.: 31° Min.: 26°</p>
          </div>
        </div>
        <div className="big-stats">
          <div className="stats">
            <div className="stat">
              <img src={rainImage} alt="rain" />
              <p>6%</p>
            </div>
            <div className="stat">
              <img src={humidityImage} alt="humidity" />
              <p>90%</p>
            </div>
            <div className="stat">
              <img src={windImage} alt="wind" />
              <p>19 km/h</p>
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
