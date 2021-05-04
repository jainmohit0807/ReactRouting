import React from 'react';
import {Message} from '../Pages/Message';

export const HomePage = ({name, message}) => {
    return(
        <>
        <h1> Welcome to home Page</h1>
        <Message name={name} message={message}/>
        </>
    )
}