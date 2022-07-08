import React, { useState } from 'react';
import Card from './Card';
require('dotenv').config();

function CityTravel() {

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
        'Kiev',
        'Milan',
        'Rio de Janeiro',
        'Sofia',
        'Athens',
        'Zagreb',
        'Brussels',
        'Istanbul',
        'Amman',
        'Beirut',
        'Jerusalem',
        'Damascus',
        'Baghdad',
        'Dubai',
        'Abu Dhabi',
        'Muscat',
        'Cairo',
        'Tripoli',
        'Baku',
        'Yerevan',
        'Nassau',
        'Manama',
        'Dhaka',
        'Bishkek',
        'Bangkok',
        'Jakarta',
        'Hong Kong',
        'Beijing',
        'Seoul',
        'Kuala Lumpur',
        'Singapore',
        'Taipei',
        'Osaka',
        'Astana',
        'Almaty',
        'Rabat',
        'Tunis',

    ];

    // a random city from cityList with names of cities
    let anyCity = cityList[Math.floor(Math.random() * cityList.length)];
    let pages = (Math.floor(Math.random() * 10) + 1);

    const [city, setCity] = useState(anyCity);
    const [cityPic, setCityPic] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleClick = () => {
        setLoading(false);

        const myApiKey = process.env.REACT_APP_API_KEY;
        setCityPic([]);
        const url = `https://api.unsplash.com/search/photos?page=${pages}&query=${city}&client_id=${myApiKey}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const urls = data.results.map(d => d.urls.regular);
            setCity(anyCity);
            setCityPic([...urls]);
            setLoading(true);
        });
    };

    return (
        <>
            <div className="cityTravel">
                <h1>City Travel</h1>
                <button onClick={() => handleClick()}>Let's travel</button>
            </div>
            <div>
                {loading && <p>Loading...</p>}
                {cityPic.map((c, i) => (
                <div key={i} className={loading ? "card-container" : "card-container-hide"}>
                    <Card 
                        cityName={city}
                        cityPic={c}
                    />
                </div>
                ))}
            </div>
        </>
    );
}

export default CityTravel;
