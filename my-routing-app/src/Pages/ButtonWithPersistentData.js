import { React, useEffect, useState } from 'react';

export const ButtonWithPersistentData = () => {

    const [numberofClick, setNumberOfClick] = useState(Number(localStorage.getItem('numberofClicks')) || 0);
    const increment = () => setNumberOfClick(numberofClick + 1);

    useEffect(() => {
        localStorage.setItem('numberofClicks', numberofClick);
    })


    return (
        <>
            <h1> Welcome to Counter Button Page</h1>
            <p>You have clicked {numberofClick} number of times</p>
            <button onClick={increment}>Number of clicks</button>
        </>
    )

}