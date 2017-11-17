import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar.js';
import HeaderOne from '../Headers/HeaderOne.js';
import axios from 'axios';
import './Profile.css';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      hairColor: '',
      eyeColor: '',
      hobby: '',
      birthDay: '',
      birthMonth: '',
      birthYear: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/user', {withCredentials: true})
      .then(res => {
        let user = res.data[0];
        this.setState({
          firstName: user.firstname,
          lastName: user.lastname,
          gender: user.gender,
          hairColor: user.hair,
          eyeColor: user.eye,
          hobby: user.hobby,
          birthDay: user.birthday,
          birthMonth: user.birthmonth,
          birthYear: user.birthyear
        })
        this.props.dispatch({type: 'UPDATE_CURRENT_USER_FROM_AXIOS', payload: res.data[0]})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return(
      <div className="profile-background">
        <NavBar title="Profile"/>
        <div className="profile-layout">
          <HeaderOne update={() => {
            // this.props.dispatch({type: 'UPDATE_CURRENT_USER', payload: this.state});
            axios.put('http://localhost:3001/api/updateUser', this.state, {withCredentials: true})
              .then( res => {
                this.props.dispatch({type: 'UPDATE_CURRENT_USER_FROM_AXIOS', payload: res.data[0]})
              })
              .catch( err => {
                console.log('update', err)
              })
          }}/>
          <div className="profile-fields">
            <div>
              First Name:<br/>
              <input type="text" value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})}/><br/>
              Last Name:<br/>
              <input type="text" value={this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})}/><br/>
              Gender:<br/>
              <select value={this.state.gender} onChange={(e) => this.setState({gender: e.target.value})}>
                <option>Please Select</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="U">Unidentified</option>
              </select><br/>
              Hair Color:<br/>
              <select value={this.state.hairColor} onChange={(e) => this.setState({hairColor: e.target.value})}>
                <option>Please Select</option>
                <option value="Black">Black</option>
                <option value="Blonde">Blonde</option>
                <option value="Blue">Blue</option>
                <option value="Brown">Brown</option>
                <option value="Green">Green</option>
                <option value="Red">Red</option>
                <option value="White">White</option>
              </select><br/>
              Eye Color:<br/>
              <select value={this.state.eyeColor} onChange={(e) => this.setState({eyeColor: e.target.value})}>
              <option>Please Select</option>
              <option value="Brown">Brown</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              </select><br/>
            </div>
            <div>
              Hobby:<br/>
              <select value={this.state.hobby} onChange={(e) => this.setState({hobby: e.target.value})}>
              <option>Please Select</option>
              <option value="Video Games">Video Games</option>
              <option value="Hiking">Hiking</option>
              <option value="Fishing">Fishing</option>
              <option value="Rafting">Rafting</option>
              </select><br/>
              Birthday Day:<br/>
              <select value={this.state.birthDay} onChange={(e) => this.setState({birthDay: e.target.value})}>
              <option>Please Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select><br/>
              Birthday Month:<br/>
              <select value={this.state.birthMonth} onChange={(e) => this.setState({birthMonth: e.target.value})}>
                <option>Please Select</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select><br/>
              Birthday Year:<br/>
              <select value={this.state.birthYear} onChange={(e) => this.setState({birthYear: e.target.value})}>
              <option>Please Select</option>
                <option value="1917">1917</option>
                <option value="1918">1918</option>
                <option value="1919">1919</option>
                <option value="1920">1920</option>
                <option value="1921">1921</option>
                <option value="1922">1922</option>
                <option value="1923">1923</option>
                <option value="1924">1924</option>
                <option value="1925">1925</option>
                <option value="1926">1926</option>
                <option value="1927">1927</option>
                <option value="1928">1928</option>
                <option value="1929">1929</option>
                <option value="1930">1930</option>
                <option value="1931">1931</option>
                <option value="1932">1932</option>
                <option value="1933">1933</option>
                <option value="1934">1934</option>
                <option value="1935">1935</option>
                <option value="1936">1936</option>
                <option value="1937">1937</option>
                <option value="1938">1938</option>
                <option value="1939">1939</option>
                <option value="1940">1940</option>
                <option value="1941">1941</option>
                <option value="1942">1942</option>
                <option value="1943">1943</option>
                <option value="1944">1944</option>
                <option value="1945">1945</option>
                <option value="1946">1946</option>
                <option value="1947">1947</option>
                <option value="1948">1948</option>
                <option value="1949">1949</option>
                <option value="1950">1950</option>
                <option value="1951">1951</option>
                <option value="1952">1952</option>
                <option value="1953">1953</option>
                <option value="1954">1954</option>
                <option value="1955">1955</option>
                <option value="1956">1956</option>
                <option value="1957">1957</option>
                <option value="1958">1958</option>
                <option value="1959">1959</option>
                <option value="1960">1960</option>
                <option value="1961">1961</option>
                <option value="1962">1962</option>
                <option value="1963">1963</option>
                <option value="1964">1964</option>
                <option value="1965">1965</option>
                <option value="1966">1966</option>
                <option value="1967">1967</option>
                <option value="1968">1968</option>
                <option value="1969">1969</option>
                <option value="1970">1970</option>
                <option value="1971">1971</option>
                <option value="1972">1972</option>
                <option value="1973">1973</option>
                <option value="1974">1974</option>
                <option value="1975">1975</option>
                <option value="1976">1976</option>
                <option value="1977">1977</option>
                <option value="1978">1978</option>
                <option value="1979">1979</option>
                <option value="1980">1980</option>
                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
              </select><br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.currentUser
}

export default connect(mapStateToProps)(Profile);
