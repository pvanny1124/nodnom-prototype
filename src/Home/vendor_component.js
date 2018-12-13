import React, { Component } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';
import vendorone from '../images/vendorone.png';



export default class Home extends Component {
  constructor(props){
      super(props);
    }


  render() {
    return (
      <div>
        <div className="row">
          <div className="col l2">
            <img className="responsive-img" src={vendorone}/>
          </div>
          <div className="col 12">
            <div className="section"/>
            <div>{this.props.vendor.vendorName}</div>
            <div style={{color: 'gray', fontFamily: 'Avenir'}}>(halal, vegetarian)</div>
            <div style={{fontWeight: 'bold', fontFamily: 'Avenir', paddingTop: '5px', fontStyle: 'italic'}}>Corner of 140th and Broadway</div>
          </div>
          </div>
      </div>
    )
  }
}
