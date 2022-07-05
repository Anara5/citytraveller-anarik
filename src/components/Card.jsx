import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="card-footer">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
}

export default Card;