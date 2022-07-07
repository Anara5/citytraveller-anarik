import React, { useEffect, useState } from 'react';
import Card from './Card';

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
    ];

    // a random city from cityList with names of cyties
    let anyCity = cityList[Math.floor(Math.random() * cityList.length)];
    let pages = (Math.floor(Math.random() * 10) + 1);

    const [city, setCity] = useState(anyCity);
    const [cityPic, setCityPic] = useState(null);


    useEffect(() => {
        const myApiKey = process.env.REACT_APP_API_KEY;
        setCityPic([]);
        const url = `https://api.unsplash.com/search/photos?page=${pages}&query=${city}&client_id=${myApiKey}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const urls = data.results.map(d => d.urls.regular);
            setCityPic([...urls]);
        });
    }, []);


    const handleClick = (e) => {
        e.preventDefault();
        setCity(city);
        setCityPic(cityPic);
    }


    return (
        <>
            <div className="cityTravel">
                <h1>City Travel</h1>
                <button onClick={handleClick}>Let's travel</button>
            </div>
            <div className={handleClick ? "card-container" : "card-container-hide"}>
                 <Card 
                    cityName={city}
                    cityPic={cityPic}
                /> 
            </div>
        </>
    );
}

export default CityTravel;
