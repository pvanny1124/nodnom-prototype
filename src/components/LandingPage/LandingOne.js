import React, { Component } from 'react';
import halal from '../images/halal.png'


export default class landingone extends React.Component {
  constructor(props){
        super(props);
        this.state = {
          userLocation: ""
        }
  }

  handleSubmit(event){
      event.preventDefault();

      //logic to get carts in the backend goes here

  }

  handleChange(event){
    this.setState({userLocation: event.target.value});
  }

  render() {
    return (
      <div>
        <div className="hide-on-med-and-up">
          <div className="background-image">
            <div style={styles.link}>
            For Food Cart Lovers
            </div>
            <div>
              <form onSubmit={(event) => this.handleSubmit(event)}>
                 <input type="text" value="Enter your location..." onChange={(event) => this.handleChange(event)}/>
                 <input type="submit" value="Find Food Trucks around you" />
              </form>
             
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
