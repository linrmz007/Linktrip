import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Signin from './container/signin';
import Persona from './container/persona';
import Result from './container/result';
import MyProfile from './container/my-profile';
import Profile from './container/profile';
import LogOut from './container/logout';
import Video from './container/video';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import GifPlayer from 'react-gif-player';
//import norwester from '../norwester.ttf';


class App extends Component {

  // saveInfo = (e) => {
  //   fetch('http://localhost:3000/persona', {
  //     method: 'POST',
  //     body: JSON.stringify(this.state),
  //     headers: {my
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       this.props.updateEvents(data);
  //     });
  // }
  render() {

    return (
    <MuiThemeProvider>
      <div>
        <Route path="/signin" component={Signin}/>
        <Route path="/video" component={Video}/>
        <Route path="/persona" component={Persona}/>
        <Route path="/result" component={Result}/>
        <Route path="/my-profile" component={MyProfile}/>
        <Route path="/profile/:username" component={Profile}/>
        <Route path="/logout" component={LogOut}/>
      </div>
    </MuiThemeProvider>
    );
  }
}



export default App;
