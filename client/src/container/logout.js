import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
//import GifPlayer from 'react-gif-player';

const style = {
  height: 200,
  width: 400,
  marginTop:100,
  textAlign: 'center',
  display: 'inline-block',
};


class LogOut extends Component {
  render() {
    return (
      <div className="logout">
      <div className='gif-logout'>
        <iframe src="https://giphy.com/embed/3ov9k06VQ0SU6f15rW" width="680" height="468" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>

        <Link to={{pathname: '/signin'}}>
          <div className='logout-btn'>
            <button class="button-primary">No, WAIT! Log Me Back IN</button>
          </div>
        </Link>
      </div>
    );
  }
}

export default LogOut;
