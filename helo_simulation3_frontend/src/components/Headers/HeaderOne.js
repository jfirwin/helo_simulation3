import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderOne.css'

const HeaderOne = (props) => {
  return(
    <div className="joined-header">
      <div className="user-info">
      <img src={`https://robohash.org/test?set=set4&size=100x100`} alt="profile"/>
        <div className="user-name">
          <h4>Name</h4>
          <h4>Name</h4>
        </div>
      </div>
      <div className="update-info-buttons">
      <button>Update</button>
      <button>Cancel</button>
      </div>
    </div>
  );
}
export default HeaderOne;
