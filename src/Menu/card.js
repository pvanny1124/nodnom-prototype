import React, { Component } from 'react';
import Rating from 'react-rating';
import '../css/menu.css';
import '../css/general.css';

const Card = (props) => {
    console.log(props.menu[0].itemName)
    return (
      <div className="row padding">
        <div className="row">
          <div className="col s12">
            {/*card one* with image*/}
            <ContentImage/>
            <ContentNoImage/>
            {/*-----*/}
          </div>
        </div>
      </div>
    )
  }

  const ContentImage = (props) => {
    return (
      <div className="card">
        <div className="container" style={{paddingTop: '10px'}}>
          <div className="col s9">
            <div className="category-title bold">POPULAR</div>
            <div>
              <div className="col s10" style={{padding: '0px'}}><div className="category-name bold">Chicken over rice</div></div>
              <div className="col s2"><div className="category-name bold">$5</div></div>
            </div>
            <div className="category-description">Marinated grilled chicken over fragrant turmeric rice with salad and white sauce </div>
          </div>
          <div className="col s3">
            <img className="thumb" src="http://www.mightysweet.com/mesohungry/wp-content/uploads/2010/11/02-Lamb-and-Chicken-Combo-Platter-11-Eleven-Express-Halal-Food-Truck.jpg"/>
          </div>
        </div>
      </div>
    )

  }

  const ContentNoImage = (props) => {
    return (
      <div className="card">
        <div className="container" style={{paddingTop: '10px'}}>
          <div className="col s9">
            <div className="category-title bold">POPULAR</div>
            <div>
              <div className="col s10" style={{padding: '0px'}}><div className="category-name bold">Chicken over rice</div></div>
              <div className="col s2"><div className="category-name bold">$5</div></div>
            </div>
            <div className="category-description">Marinated grilled chicken over fragrant turmeric rice with salad and white sauce </div>
          </div>
        </div>
      </div>
    )
  }



export default Card;
