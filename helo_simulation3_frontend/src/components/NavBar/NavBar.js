import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import home from '../../assets/home.png';
import search from '../../assets/search.png';

class NavBar extends Component {
  render() {
    return(
      <div className="nav-background">
        <div className="nav-navigation">
          <h2>
            Helo
          </h2>
          <Link to="/">
            <img src={home} alt="home"/>
          </Link>
          <Link to="/search">
            <img src={search} alt="search"/>
          </Link>
        </div>
        <div>
        {this.props.title}
        </div>
        <a href="http://localhost:3001/auth/logout">
          Logout
        </a>
      </div>
    );
  }
}
export default NavBar;
