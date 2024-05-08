import React from 'react';

interface WeatherData {
  city_name: string;
  temp: number;
  weather: {
    description: string;
    icon: string;
  };
  rh: number;
  wind_spd: number;
  clouds: number;
  visibility: number;
  sunrise: string;
  sunset: string;
}

interface WeatherDetailsProps {
  weatherData: WeatherData;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData }) => {
  const { city_name, temp, weather, rh, wind_spd, clouds, visibility, sunrise, sunset } = weatherData;

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold">{city_name}</h2>
      <p className="mt-2 text-xl">Temperature: {temp}°C</p>
      <p className="text-xl">Weather: {weather.description}</p>
      <img src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`} alt="Weather Icon" className="h-12 w-12" />
      <p className="text-xl">Humidity: {rh}%</p>
      <p className="text-xl">Wind Speed: {wind_spd} m/s</p>
      <p className="text-xl">Clouds: {clouds}%</p>
      <p className="text-xl">Visibility: {visibility} km</p>
      <p className="text-xl">Sunrise: {sunrise}</p>
      <p className="text-xl">Sunset: {sunset}</p>
    </div>
  );
};

export default WeatherDetails;
