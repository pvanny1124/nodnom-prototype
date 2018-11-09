import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './general.css';




export default class NavBar extends React.Component {
  constructor(props){
        super(props);
  }
  render() {
    return (
      <div>
      <div className="row">
       <div className="navbar">

       {/*navbar for mobile (small)*/}
          <div className="col s12 hide-on-med-and-up">
            <div className="col s2 push-s4">
              <Link to="/"> <img src="/images/nob-nom-logo.png"/> </Link>
            </div>
          </div>
       {/*navbar for tablet and desktop (med and up)*/}
        <div className="col l6 s12 hide-on-small-only" >
           <Link style={styles.link} to="/"> <img src="/images/nob-nom-logo.png"/> </Link>
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
    padding: '17px 0',
    fontSize:'18px',
    textAlign:'left'
  }
}
