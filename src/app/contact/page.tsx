import { Navbar } from '@/components/NavBar';
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">
          Have a question or need assistance? Feel free to reach out to us using the contact information provided below:
        </p>
        <ul className="mt-4">
          <li>Email: info@example.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
