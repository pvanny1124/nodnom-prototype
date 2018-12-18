import React, { Component } from 'react';


const Hours = (props) => {
  return (
    <div className="card">
     <div className="content">
      <div className="container">
         <div className="bold">HOURS</div>
         <div className="text-small">
           <div>Monday 9:00am - 12:00pm</div>
           <div>Tuesday 9:00am - 12:00pm</div>
           <div>Wednesday 9:00am - 12:00pm</div>
           <div>Thursday 9:00am - 12:00pm</div>
           <div>Friday 9:00am - 12:00pm</div>
           <div>Saturday 9:00am - 12:00pm</div>
           <div>Sunday 9:00am - 12:00pm</div>
         </div>
         <div className="divider"/>
         <div className="bold">LOCATION</div>
         <div>On campus of City College by Steinman Hall</div>
       </div>
     </div>
    </div>
  )


}

export default Hours
