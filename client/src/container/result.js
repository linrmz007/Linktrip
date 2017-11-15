import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';

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

const user = {
  picture:'',
  location:'',
  name:'',
  gender:'',
  age:'',
}


// / always follow this procssess until you define yours
// mock the data
// render a view with mocked data (mock data should not be inline)
// connect or fetch from the API
// change mocked data to data from API
// while  doing all check from time to time to see that your app is not broken

//  defined resultIsANewArray = array.map((eachItemInArray, iterateeIndex) => {
//    return AConstructedObjectFromEachItemInArray;
//  });

class Result extends Component {
  constructor(props){
    super(props)

    this.state = {
      allMatches:[],
    }

    this.getRandomBuddies();
  }

  getBuddy = (data) => {
    this.setState({
      allMatches: this.state.allMatches.concat(data),
    })
  }

  getRandomBuddies = (data) => {
    fetch('https://randomuser.me/api/?results=10&nat=us', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
    .then(data => {
      const matches = data.results.map(user => {
        return {
          picture: user.picture.large,
          email: user.email
        }
      });
      this.getBuddy(matches);
    });
  }

  render() {
    this.getRandomBuddies();

    return (
      <div>
      <NavBar/>
        <div className='result-pg'>
          <div className='result-header'>
            <Paper styles={styles}
            zDepth={2}><h5>87% Match!</h5>
            <p>Matches</p></Paper>
          </div>

          {
            this.state.allMatches.length > 0
            ? this.state.allMatches.map((match, idx) => {
              return (
                  <div className='match-made' key={`match-${idx}`}>
                    <Paper style={style} zDepth={2} className="match-info">
                      <Avatar className='avatar-img' src={match.picture} />
                      <p>Another ideal travel buddy match</p>

                      <div className="match-fb-btn">
                        <button className="button-primary">Connect via FB</button>
                      </div>
                    </Paper>
                  </div>
                )
              })
              : <Paper> Please wait we havent found a match!! </Paper>
          }

          </div>
      </div>
    );
  }
}


export default Result;
