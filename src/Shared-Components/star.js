import React, { Component } from 'react';
import Rating from 'react-rating';


const Star = (props) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="col s7 " style={{padding: '0px'}}>
          <Rating
            start={0}
            stop={5}
            step={1}
            readonly={true}
            initialRating={4}
            emptySymbol={<i className="material-icons" style={{fontSize: '38px', color: "#D8D8D8"}}>star</i>}
            fullSymbol={<i className="material-icons" style={{fontSize: '38Px', color: "#FFCE02"}}>star</i>}
            fraction={2}
          />
          </div>
          <div className="col s5  text text-white" style={{paddingTop: '5px', paddingLeft: '0px'}}>(4 reviews)</div>

      </div>
    </div>
  )


}

export default Star
//set intialRating to props.rating passed
