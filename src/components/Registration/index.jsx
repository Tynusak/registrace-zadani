import React, { useEffect, useState } from 'react';
import './style.css';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      username: document.querySelector('#userName').value,
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value,
      passwordConfirm: document.querySelector('#confirmation').value,
    });

    return user;
  };

  console.log(user);

  return (
    <form id="registration" onSubmit={handleSubmit}>
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
