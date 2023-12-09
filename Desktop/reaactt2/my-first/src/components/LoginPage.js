// LoginPage.js

import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here (mocked for demonstration purposes)
    const isValidLogin = validateLogin(studentId, pin);

    if (isValidLogin) {
      // Simulating a successful login
      alert('Login successful!');
    } else {
      // Simulating a failed login
      setErrorMessage('Invalid Student ID or PIN');
    }
  };

  const validateLogin = (id, pin) => {
    // Mock authentication logic - replace with your actual authentication logic
    return id === '12345' && pin === '6789';
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form>
        <label htmlFor="studentId">Student ID:</label>
        <input
          type="text"
          id="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />

        <label htmlFor="pin">PIN:</label>
        <input
          type="password"
          id="pin"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
