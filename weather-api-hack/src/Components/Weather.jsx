import React from 'react';
import sunCloudImage from '../assets/Sun cloud angled rain.png';
import rainImage from '../assets/noun-rain-2438520 1.png';
import humidityImage from '../assets/noun-humidity-151847 1.png';
import windImage from '../assets/noun-wind-4507827 1.png';
import hourlyImage from '../assets/Group 650.png';
import './Weather.css';


function Weather() {
  return (
    <div className="app">
      <header className="header">
        <h2>Lebanon</h2>
        <input type="text" placeholder="Search by country" />
      </header>

      <div className="current-weather">
        <div className="icon-section">
          <div className="weather-icon">
            {/* Using the imported image for weather icon */}
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
