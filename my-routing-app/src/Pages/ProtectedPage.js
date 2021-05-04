import React from 'react';
import {Redirect} from 'react-router-dom';

export const ProtectedPage = () => {
    const notAuth=true;
    return notAuth ? (<h1>You are not authorised to access the page</h1>) : <Redirect to='/' />;
}