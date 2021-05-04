import {React, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {parse} from 'query-string';

export const CounterButton = () => {
    const {abc} = useParams();

    const location = useLocation();
    const startingValue = parse(location.search).startingValue || 0;

    const [numberofClick,setNumberOfClick]=useState(Number(startingValue));
    const increment = () => setNumberOfClick(numberofClick + 1);
    

    return (
        <>
        <h1> Welcome to {abc} Counter Button Page</h1>
        <p>You have clicked {numberofClick} number of times</p>
        <button onClick={increment}>Number of clicks</button>
        </>
    )

}