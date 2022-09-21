import React from 'react';
import './style.css';

const Registration = () => {
  return (
    <form id="registration">
      <h1>Registration</h1>
      <label className="field">
        <input type="text" id="email" />
      </label>
      <label className="field">
        <input type="text" id="userName" />
      </label>
      <label className="field">
        <input type="text" id="password" />
      </label>
      <label className="field">
        <input type="text" id="confirmation" />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
