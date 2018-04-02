import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

const style = {
  height: 80,
  width: 80,
};


const inputStyle = {
  color:'white',
}

const changesMade = {};

class Profile extends Component {
  constructor(props){
    super(props);
    const userPicture = localStorage.getItem('picture');

    this.state = {
      userPicture: userPicture ? userPicture : ''
    }

  }

  updateChanges = (e) => {
    this.setState = {inputfield: e.target.value}
  }

  handleSubmit = (changes) => {
    console.log('changes here: ', changes);
  }


  render() {
    return (
      <div>
        <NavBar/>
        <div className='profile-info'>
          <div>
             <Avatar size={100} className='avatar-img2' src={this.state.userPicture} />
          </div>
          <div className='profile-personal'>
             <dl>
              <dt>Location</dt>
                <dd>Brooklyn, New York</dd>
              <dt>Age</dt>
                <dd>28</dd>
              <dt>Travel Buddy Persona</dt>
                <dd>Spontaneous Sun Seeker.</dd>
              <dt>Places Visited</dt>
                <dd>
                  <TextField
                    hintText="Name some places"/>
                </dd>
              <dt>Places to Visit</dt>
                <dd>
                  <TextField
                  inputStyle={{inputStyle}}
                    hintText="Where do you want to go?"/>
                </dd>
            </dl>
            </div>
            <div className='profile-btns'>
            <div className='profile-sv-btn'>
              <button className="button-primary"
              onChange={this.updateInputValue}
              onClick={() => this.handleSubmit(changesMade)}
              >Save Changes</button>
            </div>
          <Link to={{pathname: '/result'}}>
            <div className='profile-bk-btn'>
              <button className="button-primary">Back To Matches</button>
            </div>
          </Link>
          </div>
          </div>
      </div>
    );
  }
}

export default Profile;
