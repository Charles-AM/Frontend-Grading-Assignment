import React from 'react';
import './homepage.css';

const HomePage = () => {
  const navigateToLogin = () => {

  };

  return (
    <div className="home-container">
      <div className="nav-bar">
        {/* Links to other components */}
        <a href='./components/LoginPage.js'className="nav-link">Dashboard</a>
        <a href="" className="nav-link">Grade Reporting</a>
        <a href="LoginPage.js" className="nav-link">Missing Grade Form</a>
        <a href="" className="nav-link">Instructor Contact</a>
        <a href="" className="nav-link">Help and Support</a>
        {/* Add more links as needed */}
      </div>
      <div className="content">
        <h1>Welcome to the Missing Grade Reporting System</h1>
        <p>
          This system is designed to assist you in tracking and reporting grades that are not recorded in your academic profiles.
        </p>
        <p>
          <strong>How it Works:</strong> The system provides an intuitive interface to navigate through different features. 
          Login to access your personalized dashboard, where you can report missing grades and view important insights.
        </p>
        <p>
          <strong>Features:</strong>
        </p>
        <ul>
          <li>
            <strong>Login:</strong> Use this link to log in and access your personalized dashboard.
          </li>
          <li>
            <strong>Dashboard:</strong> Get an overview of your academic performance and missing grades.
          </li>
          <li>
            <strong>Grade Reporting:</strong> Easily report grades that are not yet recorded.
          </li>
          <li>
            <strong>Missing Grade Form:</strong> Access the form to report grades that are currently missing from your profile.
          </li>
          <li>
            <strong>Instructor Contact:</strong> Find information on how to contact your instructors for grade-related queries.
          </li>
          <li>
            <strong>Help and Support:</strong> Get assistance or answers to your questions through the Help and Support section.
          </li>
          {/* Add more features as needed */}
        </ul>
        <p>
          <strong>Explore:</strong> Use the navigation links above to explore different features of the system.
        </p>
        <p>
          <strong>Need Help?</strong> If you encounter any issues or have questions, feel free to reach out using the Help and Support section.
        </p>
      </div>
  
      <button className="login-button" onClick={navigateToLogin}>Login To Your Portal</button>
    </div>
  );
};

export default HomePage;
