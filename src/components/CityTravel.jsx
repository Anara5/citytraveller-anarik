import React from 'react';
import { useState, useEffect } from "react";
import { db } from '../firebase/firebase';
// import { uid } from 'react-uid';
import Card from './Card';
import MyGlobe from './MyGlobe';


function CityTravel() {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        db.collection('cities').onSnapshot(snapshot => {
            setCities(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
    }, []);

    

    return (
        <>
            <div>
                <h1>City Travel</h1>
            </div>
            <div>
                <MyGlobe />
            </div>
            <div>



                {cities.map(city => (
                    <Card
                        // key={uid(city)}
                        key={city.id}
                        image={city.image}
                        title={city.title}
                        text={city.text}
                    />
                ))}
            </div>
        </>
    );
}

export default CityTravel;
