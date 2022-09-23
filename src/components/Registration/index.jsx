import React, { useState } from 'react';
import validator from 'validator';
import './style.css';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleUserName = () => {
    const emailValue = document.querySelector('#email').value;
    const at = emailValue.indexOf('@');
    const isEmail = validator.isEmail(emailValue);

    if (isEmail) {
      document.querySelector('#userName').value = emailValue.slice(0, at);
    }
  };

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
        <input type="text" id="email" onChange={handleUserName} />
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
