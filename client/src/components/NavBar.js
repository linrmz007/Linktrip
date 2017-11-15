import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router-dom';



class NavBar extends Component {


  render() {

    const styles = {
      backgroundColor: '#4cc2f1',
      boxShadow: 'none',
      button:'none',
      color:'white',
    };

    return (
      <div>
        <AppBar
          className="app-bar"
          style={styles}
          showMenuIconButton={false}>
          <div className="nav-bar-menu">
            <IconMenu
            styles={styles}
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                <Link to={{pathname: '/video'}}>
                 <MenuItem primaryText="How It Works" />
                </Link>
                 <Link to={{pathname: '/persona'}}>
                  <MenuItem primaryText="Travel Buddy Test" />
                 </Link>
                 <Link to={{pathname: '/result'}}>
                  <MenuItem primaryText="Matches" />
                 </Link>
                 <Link to={{pathname: '/profile'}}>
                  <MenuItem primaryText="Profile" />
                 </Link>
                 <Link to={{pathname: '/logout'}}>
                  <MenuItem primaryText="Log Out" />
                 </Link>
            </IconMenu>
          </div>
          </AppBar>
      </div>
    );
  }
}

export default NavBar;
