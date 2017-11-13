import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { Route, Link } from 'react-router-dom';

const style = {
  height: 150,
  width: 980,
  margin: 50,
  marginTop:50,
  marginLeft:206,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent:'space-around',
};

const styles = {
  height: 200,
  width: 700,
  marginTop:50,
  marginLeft:206,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

class Result extends Component {
  render() {
    return (
      <div>
        <NavBar/>
          <div className='result-header'>
            <Paper styles={styles}
            zDepth={2}><h5>User Persona Results</h5>
            <p>Matches</p></Paper>
          </div>
          <div className='match-made'>
          <Paper style={style} zDepth={2} className="match-info">
            <Avatar className='avatar-img' src="images/uxceo-128.jpg" />

            <p>Similar travel buddies like you</p>
            <div className="match-fb-btn">
              <button className="button-primary">Connect via FB</button>
            </div>
          </Paper>
          </div>
          <div className='match-made'>
          <Paper style={style} zDepth={2} className="match-info">
            <Avatar className='avatar-img' src="images/uxceo-128.jpg" />
            <p>Getin touch wit your purfect travel buddy</p>
            <div className="match-fb-btn">
              <button className="button-primary">Connect via FB</button>
            </div>
          </Paper>
          </div>
      </div>
    );
  }
}

export default Result;
