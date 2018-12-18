import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../css/general.css';
import logo from '../images/nob-nom-logo.png';




export default class NavBar extends React.Component {
  constructor(props){
        super(props);
  }
  render() {
    return (
      <div>
      <div className="row"style={{margin: 0}}>
       <div className="navbar">

       {/*navbar for mobile (small)*/}
          <div className="col s12 hide-on-med-and-up">
            <div className="col s2 push-s4">
              <Link to="/"> <img src={logo}/> </Link>
            </div>
          </div>
       {/*navbar for tablet and desktop (med and up)*/}
        <div className="col l6 s12 hide-on-small-only" >
          <div className="col s2">
            <Link style={styles.link} to="/"> <img src={logo}/> </Link>
          </div>
          <div className="col s2 push-s7">
            <Link style={styles.link} to="/login"> Log In </Link>
          </div>
          <div className="col s2 push-s6">
            <div style={styles.button}>
            <Link style={styles.link} to="/signup/users"> Sign Up </Link>
            </div>
          </div>
          <div className="col s2 push-s5">
                <Link style={styles.link} to="/signup/vendors"> Have a cart? Sign up as a vendor! </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}


const styles = {
  link: {
    color: 'white',
    //padding: '0 0 0 20px',
    fontSize:'25px',
    textAlign:'right',
    fontFamily: 'Acme'
  },
  button: {
    borderStyle: 'solid',
    borderColor: '#FBDB58',
    backgroundColor: '#FFCE02',
    borderRadius: '8px',
    padding: '0 0 0 25%'
  }

}
