// Logo.js
import React from 'react';
import logoImage from './logo1.jpg'; // Replace with the actual path to your logo image

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo" className="logo-image" />
    </div>
  );
};

export default Logo;
