import React from 'react';

export const UserProfile= ({user}) => {
    

    return (
        <>
        <div>
            Name : {user.name.first}
            </div>
        <div>
            Phone : {user.phone}
        </div>
        <div>
            City : {user.location.city}
        </div>
        <div>
            Email : {user.email}
        </div>
        </>
    );

}