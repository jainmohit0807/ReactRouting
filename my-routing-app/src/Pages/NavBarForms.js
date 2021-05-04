import React from 'react';
import { Link } from 'react-router-dom';

export const NavBarForms = () => {
    return (
        <ul>
            <li>
                <Link to="/Pages/ControlledForm">Go to Controlled Form Link</Link>
            </li>
            <li>
                <Link to="/Pages/UnControlledForm" >Go to UnControlled Form Link</Link>
            </li>
        </ul>
    )
}





