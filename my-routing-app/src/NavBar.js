import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/pages/CounterButton">Go to Counter Button</Link>
            </li>
            <li>
                <Link to="/pages/" >Go to First Screen</Link>
            </li>
            <li>
                <Link to="/pages/StudentGroup">Go to Student Screen</Link>
            </li>
            <li>
                <Link to="/Pages/Form" >Go to Form Page</Link>
            </li>
            <li>
                <Link to="/" >Go to Home Screen</Link>
            </li>
            <li>
                <Link to="/Pages/UserData" >Go to User Data using API Link</Link>
            </li>
        </ul>
    )
}





