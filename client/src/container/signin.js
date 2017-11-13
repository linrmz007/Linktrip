import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';


const responseFacebook = (response) => {
  console.log(response);
  login(response)
}


class Signin extends Component {


  render() {
    return (
      <div className="linktrip-logo">
        <h1>LINKTRIP</h1>
        <Link to={{pathname: '/video'}}>
          <FacebookLogin
            appId="1587172338028291"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            className="facebook-login" />
            </Link>
      </div>
    );
  }
}


function login (data){
  const config = new Request ('http://localhost:4000/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  return fetch(config);
}


export default Signin;
