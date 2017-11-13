import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';

const style = {
  height: 80,
  width: 80,
};



class Profile extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className='profile-info'>
          <div>
             <Avatar style={style} className='avatar-img2' src="images/uxceo-128.jpg" />
          </div>
          <div class='profile-personal'>
             <dl>
              <dt>Age</dt>
                <dd>28</dd>
              <dt>Location</dt>
                <dd>Brooklyn, New York</dd>
              <dt>Places Visited</dt>
                <dd>South East Asia, Japan, India</dd>
              <dt>Places to Visit</dt>
                <dd>Nigeria, Madagascar, Bhutan</dd>
              <dt>Travel Buddy Persona</dt>
                <dd>Spontaneous Sun Seeker.</dd>
            </dl>
            </div>
          <Link to={{pathname: '/result'}}>
            <div className='profile-bk-btn'>
              <button class="button-primary">Back To Matches</button>
            </div>
          </Link>
          </div>
      </div>
    );
  }
}

export default Profile;
