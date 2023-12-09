import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="nav-bar">
        {/* Links to other components */}
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/grade-report" className="nav-link">
          Grade Reporting
        </Link>
        <Link to="/missing-grade-form" className="nav-link">
          Missing Grade Form
        </Link>
        <Link to="/instructor-contact" className="nav-link">
          Instructor Contact
        </Link>
        <Link to="/help-and-support" className="nav-link">
          Help and Support
        </Link>
        {/* Add more links as needed */}
      </div>
      <h1>HI</h1>
    </div>
  );
};

export default HomePage;
