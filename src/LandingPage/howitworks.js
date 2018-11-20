import React, { Component } from 'react';
import halal from '../images/halal.png';
import foodandhands from '../images/food and hands.png';
import menu from '../images/menu.png';
import browsecarts from '../images/browsecarts.png';


export default class howitworks extends React.Component {
  constructor(props){
        super(props);
  }

  render() {
    return (
      <div>
        <div className="hide-on-med-and-up">
          <div style={styles.link}>
            How it Works
          </div>
        </div>

        <div className= "hide-on-small-only">
          <div style={styles.link}>
            How it works
          </div>
          <div className="row">
          <div className="col l4 m4" style={styles.padding}>
            <img className="responsive-img" src={browsecarts}/>
            <div className="section"/>
            <div className="container" style={styles.text}> Browse carts and trucks near your location</div>
          </div>
          <div className="col l4 m4" style={styles.padding}>
            <img className="responsive-img" src={menu}/>
            <div className="section"/>
            <div className="container" style={styles.text}> View their menu, hours, and rating</div>
          </div>
          <div className="col l4 m4" style={styles.padding}>
            <img className="responsive-img" src={foodandhands} />
            <div className="section"/>
            <div className="container" style={styles.text}> Order from a local and support your community! </div>
          </div>
          </div>
        </div>
      </div>
    )
  }

}
const styles = {
  link: {
    padding: '17px 0',
    fontSize:'30px',
    textAlign:'center',
    fontFamily: 'Acme',
    paddingTop: '40px'
  },
  padding: {
    padding: '0px'
  },
  text: {
    textAlign: 'center',
    fontSize: '18px',
    fontFamily: 'Avenir'
  }
}
