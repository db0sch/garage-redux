import React, { Component } from 'react';

export const Car = (props) => {
  return (
    <div className="car">
      <div className="car-picture">
        <img src="./assets/image/wagon.png" alt=""/>
      </div>
      <div className="car-details">
        <h4>{props.car.brand} - {props.car.model}</h4>
        <p>Owner: {props.car.owner}</p>
      </div>
    </div>
  )
}
