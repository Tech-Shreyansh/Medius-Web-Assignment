'use client'
require('dotenv').config()
import React, { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import WeatherDetails from '../components/WeatherDetails';

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

const Home: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const handleSubmit = async (e: React.FormEvent) => {
    if(city){
      e.preventDefault();
      setIsLoading(true)
      try {
        const response = await axios.get(
          `https://api.weatherbit.io/v2.0/current?&city=${city}&key=${process.env.NEXT_PUBLIC_ApiKey}&include=minutely`
        );
        if((response.data.data[0])["city_name"])
        setWeatherData(response.data.data[0]);
        else
        alert("enter valid city name")
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
      setIsLoading(false)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to Weather App</h1>

        <p className="mt-3 text-2xl">Enter your city to check the weather</p>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Enter City"
            className="p-3 mr-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 px-4 py-3  text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleSubmit}
          >
            {isLoading?"Loading":"Check Weather"}
          </button>
        </div>

        {(city && weatherData) && <WeatherDetails weatherData={weatherData} />}
      </main>
    </div>
  );
};

export default Home;