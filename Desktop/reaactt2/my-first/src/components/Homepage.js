// HomePage.js

import React from 'react';
import './Homepage.css';

const HomePage = () => {
  const navigateToLogin = () => {
    // Add your logic to navigate to the login page
    window.location.href = './components/LoginPage'; // Replace with your actual login page URL
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Missing Grade Reporting System</h1>
      <p>
        This system is designed to help you track and report grades that are not recorded in your academic profiles.
      </p>
      <p>
        Use the navigation links above to explore different features of the system.
      </p>
      <p>
        If you encounter any issues or have questions, feel free to reach out using the Help and Support section.
      </p>
      
      {/* Add a button to navigate to the login page */}
      <button className="login-button" onClick={navigateToLogin}>
        Login
      </button>
    </div>
  );
};

export default HomePage;

