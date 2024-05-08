import { Navbar } from '@/components/NavBar';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          We are a team of passionate developers committed to delivering high-quality software solutions. Our expertise lies in web development, mobile app development, and user experience design. We strive to create innovative and user-friendly applications that meet the needs of our clients.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
