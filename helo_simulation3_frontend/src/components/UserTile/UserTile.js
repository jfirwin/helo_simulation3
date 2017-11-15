import React from 'react';
import './UserTile.css'

const UserTile = (props) => {
  return(
    <div className="user-tile">
      <div className="user-info-tile">
        <img src={`https://robohash.org/test?set=set4&size=100x100`} alt="profile"/>
        <div className="user-name">
            <h4>Name</h4>
            <h4>Name</h4>
        </div>
      </div>
      <button>Add Friend</button>
    </div>
  );
}
export default UserTile;
