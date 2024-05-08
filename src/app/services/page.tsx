import { Navbar } from '@/components/NavBar';
import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">Services Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Weather Data API Integration</h2>
            <p>Integrate real-time weather data into your application using powerful weather APIs. Get access to current weather conditions, forecasts, historical data, and more.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Climate Analysis</h2>
            <p>Utilize climate analysis services to understand historical weather patterns, climate trends, and climate change impacts. Make informed decisions based on climate data.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Timezone Conversion</h2>
            <p>Implement timezone conversion functionality in your application to display local time for different locations around the world. Ensure accurate time representation for users globally.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
