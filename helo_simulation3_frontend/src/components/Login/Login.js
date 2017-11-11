import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = function(props) {
    return(
      <div className="login-background">
        <div className="login-box">
          <img src={''} alt='Helo Logo'/>
          <Link to="/profile">
            <button className="login-button">Login/Register</button>
          </Link>
        </div>
      </div>
    );
}
export default Login;
