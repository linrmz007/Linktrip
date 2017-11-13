import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Route, Link } from 'react-router-dom';


class Video extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <div className='video-header'>
      <div className='video'>
        <YouTube
          videoId="utslUVY8UK8"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
      <Link to={{pathname: '/persona'}}>
        <div className='skip-btn'>
          <button className="button-primary">SKIP</button>
        </div>
      </Link>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;
