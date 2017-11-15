import React from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

const Login = function(props) {
    return(
      <div className="login-background">
        <div className="login-box">
          <img src={logo} alt='Helo Logo'/>
          <h1>Helo</h1>
          <a href="http://localhost:3001/auth">
            <button className="login-button">Login/Register</button>
          </a>
        </div>
      </div>
    );
}
export default Login;
