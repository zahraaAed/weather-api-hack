import React, { useEffect, useRef, useState } from 'react';
import sunCloudImage from '../assets/Sun cloud angled rain.png';
import rainImage from '../assets/noun-rain-2438520 1.png';
import humidityImage from '../assets/noun-humidity-151847 1.png';
import windImage from '../assets/noun-wind-4507827 1.png';
import hourlyImage from '../assets/Group 650.png';
import sunImage from "../assets/sun.png";
import rainyImage from "../assets/rainy.png";
import thunderstormImage from "../assets/thunderstorm.png";
import snowyImage from "../assets/snowy.png";
import mistImage from "../assets/mist.png";
import brokenCloudImage from "../assets/broken-clouds.png";
import cloudImage from "../assets/cloud.png";
import fewCloudImage from "../assets/few-clouds.png";
import './Weather.css';

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState({
    humidity: 0,
    windspeed: 0,
    temperature: 0,
    location: '',
    icon: sunCloudImage,
    temperature_max: 0,
    temperature_min: 0,
    hourlyForecast: [],
  });

  const allIcons = {
    "01d": sunImage,
    "01n": sunImage,
    "02d": fewCloudImage,
    "02n": fewCloudImage,
    "03d": cloudImage,
    "03n": cloudImage,
    "04d": brokenCloudImage,
    "04n": brokenCloudImage,
    "09d": sunCloudImage,
    "09n": sunCloudImage,
    "10d": rainyImage,
    "10n": rainyImage,
    "11d": thunderstormImage,
    "11n": thunderstormImage,
    "13d": snowyImage,
    "13n": snowyImage,
    "50d": mistImage,
    "50n": mistImage
  };

  let apiKey = import.meta.env.VITE_APP_KEY; // Get the API key from the .env file

  const search = async (cityName) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

      console.log("API Key:", apiKey);

      const response = await fetch(url);
      const data = await response.json();
      console.log(data)

      if (data.cod !== 200) {
        throw new Error(data.message || "Failed to fetch weather data");
      }

      const icon = allIcons[data.weather[0].icon] || sunCloudImage;
      setWeatherData({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
        temperature_max: Math.floor(data.main.temp_max),
        temperature_min: Math.floor(data.main.temp_min),
        hourlyForecast: [], // Reset hourly forecast
      });

      const lat = data.coord.lat;
      const lon = data.coord.lon;
      hourlySearch(lat, lon);
      
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(prevState => ({
        ...prevState,
        location: "Error: Unable to fetch weather data",
        temperature: "",
        humidity: "",
        windspeed: "",
        temperature_max: "",
        temperature_min: "",
        hourlyForecast: []
      }));
    }
  };

  const hourlySearch = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;


  
    console.log("api",apiKey)
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Hourly Data:", data);
        
        if (data.list && data.list.length > 0) {
          setWeatherData(prevData => ({
            ...prevData,
            hourlyForecast: data.list.map(item => ({
              temperature: Math.floor(item.main.temp),
              time: new Date(item.dt * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              icon: allIcons[item.weather[0].icon] || hourlyImage,
            })).slice(0, 6), // Limit to first 6 hours
          }));
        } else {
          console.warn("No hourly forecast data available.");
          setWeatherData(prevData => ({
            ...prevData,
            hourlyForecast: []
          }));
        }
      })
      .catch((error) => {
        console.error("Error fetching hourly weather data:", error);
        setWeatherData(prevData => ({
          ...prevData,
          hourlyForecast: []
        }));
      });
  };
  
  useEffect(() => {
    search("Lebanon");
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h2>{weatherData.location || "Weather App"}</h2>
        <div className="search">
          <input ref={inputRef} type="text" placeholder="Search by country" className="search-input" />
          <button
            className="search-icon"
            onClick={() => {
              search(inputRef.current.value);  
              inputRef.current.value = ''; 
            }}
          >
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
            <img src={weatherData.icon || sunCloudImage} alt="weather icon" />
          </div>
          <div className="temperature">{weatherData.temperature}°</div>
          <div className="details">
            <p>Precipitations</p>
            <p>
              Max. : {weatherData.temperature_max}° Min. : {weatherData.temperature_min}°
            </p>
          </div>
        </div>
        <div className="big-stats">
          <div className="stats">
            <div className="stat">
              <img src={rainImage} alt="rain" />
              <p>{weatherData.humidity}%</p>
            </div>
            <div className="stat">
              <img src={humidityImage} alt="humidity" />
              <p>{weatherData.windspeed} km/h</p>
            </div>
            <div className="stat">
              <img src={windImage} alt="wind" />
              <p>{weatherData.temperature}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hourly-weather">
        <h3>Hourly Forecast</h3>
        <div className="hourly-cards">
          {Array.isArray(weatherData.hourlyForecast) && weatherData.hourlyForecast.length > 0 ? (
            weatherData.hourlyForecast.map((hour, index) => (
              <div className="hour-card" key={index}>
                <p>{Math.round(hour.temperature)}°</p>
                <img src={hour.icon} alt="hourly weather" className="hour-icon" /> 
                <p>{hour.time}</p>
              </div>
            ))
          ) : (
            <p>No hourly forecast data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
