import React, { Component } from 'react';
//import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';
import vendorone from '../images/vendorone.png';
import Rating from 'react-rating';
import general from '../css/general.css';


export default class Home extends Component {
  constructor(props){
      super(props);
    }


  render() {
    let vendorName = this.props.vendor.vendorName.toUpperCase()
    return (
      <div>
        <div className="row" style={{paddingTop: "10px"}}>
          <div className="col l2">
            <img className="responsive-img" src={vendorone}/>
          </div>
          <div className="col 12">
            <div className="section"/>
            <div style={{fontSize: '22px', fontWeight: 'bold'}}>{vendorName}</div>
            <div style={{color: 'gray', fontFamily: 'Avenir'}}>(halal, vegetarian)</div>
            <Rating
              start={0}
              stop={5}
              step={1}
              readonly={true}
              initialRating={this.props.vendor.rating}
              emptySymbol={<i className="material-icons" style={{fontSize: '29px', color: "#D8D8D8"}}>star</i>}
              fullSymbol={<i className="material-icons" style={{fontSize: "29px", color: "#FFCE02"}}>star</i>}
              fraction={2}
            />
            <div style={{fontWeight: 'bold', fontFamily: 'Avenir', paddingTop: '5px', fontStyle: 'italic'}}>Corner of 140th and Broadway</div>
          </div>

          </div>
          <div className="divider"></div>
      </div>
    )
  }
}
