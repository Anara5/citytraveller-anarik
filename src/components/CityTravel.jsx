import React, { useEffect, useState } from 'react';
import Card from './Card';

function CityTravel() {
    // a random city from cityList with names of cyties
    const [city, setCity] = useState(anyCity);

    const [cityPic, setCityPic] = useState([]);

    // a list of cities to get a random one from
    const cityList = [
        'Paris',
        'London',
        'New York',
        'Tokyo',
        'Berlin',
        'Madrid',
        'Rome',
        'Barcelona',
        'Amsterdam',
        'Vienna',
        'Prague',
        'Budapest',
        'Helsinki',
        'Copenhagen',
        'Oslo',
        'Stockholm',
        'Warsaw',
        'Bucharest',
        'Belgrade',
        'Lisbon',
        'Moscow',
        'Riga',
        'Bratislava'
    ];

    let anyCity = cityList[Math.floor(Math.random() * cityList.length)];

    useEffect(() => {

        const accessKey = process.env.REACT_APP_ACCESSKEY;

        setCityPic([])
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${accessKey}`)
        .then(res => res.json())
        .then(data => {
            setCityPic(data.results)
        });
    }, [city]);


    const handleSubmit = (event) => {
        event.preventDefault();
        if(city!=='') setCity(city);
    }

    return (
        <>
            <div className="cityTravel">
                <h1>City Travel</h1>
                <button onClick={handleSubmit}>City</button>
            </div>
            <div className="picture">
                <img className='img' src={city} />
            </div>
        </>
    );
}

export default CityTravel;
