import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.js';
import './Search.css';
import UserTile from '../UserTile/UserTile';

class Dashboard extends Component {
  render() {
    return(
      <div className="search-background">
        <NavBar title="Search"/>
        <div className="search-layout">
          <div className="search-results">
            <div className="search-header">
              <div>
                <select>
                  <option value="First Name">First Name</option>
                  <option value="Last Name">Last Name</option>
                </select>
                <input/>
              </div>
              <div className="search-buttons">
                <button>Search</button>
                <button>Reset</button>
              </div>
            </div>
            <div className="results">
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
