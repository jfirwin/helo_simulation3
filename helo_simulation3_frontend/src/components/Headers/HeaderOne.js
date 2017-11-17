import React from 'react';
import { connect } from 'react-redux';
import './HeaderOne.css'

const HeaderOne = (props) => {
  return(
    <div className="joined-header">
      <div className="user-info">
      {   props.firstName === ''
          ?
          <img src={`https://robohash.org/loading?set=set4&size=100x100`} alt="profile"/>
          :
          <img src={`https://robohash.org/${props.firstName}?set=set4&size=100x100`} alt="profile"/>
      }
        <div className="user-name">
          <h4>{props.firstName}</h4>
          <h4>{props.lastName}</h4>
        </div>
      </div>
      <div className="update-info-buttons">
      <button onClick={() => props.update()}>Update</button>
      <button>Cancel</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return state.currentUser
}
export default connect(mapStateToProps)(HeaderOne);
