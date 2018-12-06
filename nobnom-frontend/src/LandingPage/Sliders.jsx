import React, { Component } from 'react';
import halal from '../images/halal.png'


class Sliders extends Component {
  constructor(props){
        super(props);
  }

  render() {
          
          
    return (
      <div>
        <div className="hide-on-med-and-up">
          <div className="background-image">
            <div style={styles.link}>
            For Food Cart Lovers
            </div>
          </div>
        </div>
        <div className= "hide-on-small-only">
          <div className="background-image">
            <div style={styles.link}>
              For Food Cart Lovers
            </div>
          {/*just adding some padding here*/}
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
          </div>
        </div>
      </div>
    )
  }

}
const styles = {
  link: {
    color: 'white',
    padding: '17px 0',
    fontSize:'30px',
    textAlign:'center',
    fontFamily: 'Acme',
    paddingBottom: '180px',
    paddingTop: '40px'
  }
}

export default Sliders;