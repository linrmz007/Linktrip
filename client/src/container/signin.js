import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

const responseFacebook = (response) => {
  console.log(response);
  login(response)
  // send this to the backend
  // get the responsefro from the bakcend
  // get the avartar fromt he response
  // save the imagge ein local storage
  // fetch the image and use somewhere else
}

const opts = {
  height: '410',
  width: '700',
  playerVars: {
    autoplay: 1
  }
};



class Signin extends Component {

  handleSignIn = (response) => {
    console.log(response);
    console.log('pic data', response.picture.data.url);


    localStorage.setItem('picture', response.picture.data.url);

    // fetch('http://localhost:4000/user', {
    //   method: 'POST',
    //   body: JSON.stringify(response),
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //   }
    // }).then(data => {
    //   console.log('result',data);
    //   response.picture.data.url.json()
    // })
    // .then(user => {
    //   console.log('user data', user);
    // });
  }


  render() {
    return (
      <div>
      <div className="linktrip-logo">
        <h1>LINKTRIP</h1>
        <Link to={{pathname: '/video'}}>
          <FacebookLogin
            appId="1587172338028291"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.handleSignIn}
            className="facebook-login" />
            </Link>
            <p className='signin-q'>Your dream destination with an ideal travel buddy is just links away..</p>
      </div>
      </div>
    );
  }
}

//this.props.authencatication.picture.data.url

function login (data){
  const config = new Request ('http://localhost:4000/user', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  return fetch(config);
}


export default Signin;
