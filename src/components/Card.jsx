import React from 'react';

function Card({ cityName, cityPic }) {

  return (
    <div className="card">
      <div className="city-name">
        <h1>{cityName}</h1>
      </div>
      <div className="city-picture">
        <img id="anim_block" className="picture" src={cityPic} alt="city" />
      </div>
    </div>
  )
}

export default Card;
