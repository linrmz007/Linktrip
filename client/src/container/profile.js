import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

const style = {
  height: 80,
  width: 80,
};

const styles = {
  color:'white',
}

const inputStyle = {
  color:'white',
}

const inputProfile = {
  color:"white",
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

  componentDidMount() {
    const username = this.props.match.params.username
    console.log('usernameeeee', username)

    fetch('https://randomuser.me/api/?results=10&nat=us', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
    .then(data => {
      console.log('before find', data);
      const user = data.results.find(u => {
        console.log('during find', u);
        console.log('during find', username);
        return u.login.username == username
      });
      console.log('after find', user);
      this.setState({user})
    })
  }

  updateChanges = (e) => {
    this.setState = {inputfield: e.target.value}
  }

  handleSubmit = (changes) => {
    console.log('changes here: ', changes);
  }


  render() {
    const user = this.state.user;
    console.log('userrrrrrr', user)
    return (
      <div>
      <NavBar/>
      {user ?
          (
            <div className='profile-info'>
          <div>
             <Avatar size={150} className='avatar-img2' src={user.picture} />
          </div>
          <div className='profile-personal'>
             <dl>
              <dt>Location</dt>
                <dd>{user.location}</dd>
              <dt>Age</dt>
                <dd>28</dd>
              <dt>Travel Buddy Persona</dt>
                <dd>Spontaneous Sun Seeker.</dd>
              <dt>Places Visited</dt>
                <dd>
                  <TextField
                    className={inputProfile}
                    hintText="Name some places"/>
                </dd>
              <dt>Places to Visit</dt>
                <dd>
                  <TextField
                  inputStyle={inputStyle}
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
          </div>) : 'User Not Found'}
      </div>
    );
  }
}

export default Profile;
