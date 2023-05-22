import React from 'react';
import holberton from '../assets/holberton-logo.jpg';
import './Login.css';

function Login() {
  return (
    <>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email" >Email: </label>
        <input id="email" type="email" name="email" />
        <label htmlFor="password" >  Password: </label>
        <input id="password" type="password" name="password" />
        <button style={{marginLeft:'5px'}}>OK</button>
      </div>
    </>
  );
}

export default Login;