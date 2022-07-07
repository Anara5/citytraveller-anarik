import React from 'react';

function Card(props) {

  return (
    <div className="card">
      <img src={this.props.picture} alt="city" />
      <h1>{this.props.cityName}</h1>
    </div>
  )
}

export default Card;
