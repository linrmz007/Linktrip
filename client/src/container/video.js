import React from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';


class Video extends React.Component {
  render() {
    const opts = {
      height: '450',
      width: '800',
      playerVars: {
        autoplay: 1
      }
    };

    const style={
      root:{
        backgroundColor: '#1444A3',
      }
    }

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
          <input class="button-primary" type="submit" value="SKip" />
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
