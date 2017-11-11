import React from 'react';
import './Login.css'

const Login = function(props) {
    return(
      <div className="login-background">
        <div className="login-box">
          <img src={''} alt='Helo Logo'/> 
          <button className="login-button">Login/Register</button>
        </div>
      </div>
    );
}
export default Login;
