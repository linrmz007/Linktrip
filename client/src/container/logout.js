import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';


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
        <Paper className='logout-header' style={style} zDepth={2} />
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
