import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderTwo.css'

const HeaderTwo = (props) => {
  return(
    <div className="split-header">
      <div className="user-info">
        <img src={`https://robohash.org/test?set=set4&size=100x100`} alt="profile"/>
        <div className="user-name">
          <h4>Name</h4>
          <h4>Name</h4>
          <Link to="/profile">
            <button>Edit Profile</button>
          </Link>
        </div>
      </div>
      <div className="welcome-info">
        <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</p>
      </div>

    </div>
  );
}
export default HeaderTwo;
