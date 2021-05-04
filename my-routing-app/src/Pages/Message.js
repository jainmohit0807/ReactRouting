import React from 'react'

export const Message = ({name, message}) => {
    
    let timeHour = (new Date()).getHours();
    let morning_evening = timeHour >= 12 ? "Evening" : "Morning";
    return (
        <>
        <p>Good {morning_evening} {name} </p>
        <p>You have {message} messages</p>
        </>
    );
}