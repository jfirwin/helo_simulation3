import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.js';
import './Dashboard.css';
import HeaderTwo from '../Headers/HeaderTwo';
import UserTile from '../UserTile/UserTile';

class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard-background">
        <NavBar title="Dashboard"/>
        <div className="dashboard-layout">
        <HeaderTwo/>
          <div className="recommendations">
            <div className="recommendation-header">
              <div>
                <h3>Recommended Friends</h3>
              </div>
              <div className="sort">
                <p>Sorted By</p>
                <select>
                  <option value="First Name">First Name</option>
                  <option value="Last Name">Last Name</option>
                  <option value="Gender">Gender</option>
                  <option value="Hair Color">Hair Color</option>
                  <option value="Eye Color">Eye Color</option>
                  <option value="Hobby">Hobby</option>
                  <option value="Birthday">Birthday</option>
                </select>
              </div>
            </div>
            <div className="recommended">
              <UserTile/>
              <UserTile/>
              <UserTile/>
              <UserTile/>
              <UserTile/>
              <UserTile/>
              <UserTile/>
              <UserTile/>
              <UserTile/>
              <UserTile/>
              <UserTile/>
              <UserTile/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
