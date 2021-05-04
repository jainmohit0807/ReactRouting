import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';

export const NavigateProgrammatically = () => {
    const history = useHistory();
    const notAuth=false;

    useEffect(() => {
        if(!notAuth){
        history.push('/pages/StudentGroup');
    }
    })

    
    return (<h1>You are not authorised to access the page</h1>) 
}