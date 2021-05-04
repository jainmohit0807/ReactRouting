import React, {useEffect,useState} from 'react';

export const UserData = () => {
    const [user,setUser] = useState({ name :{}, location:{}, email : ''});
    
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            setUser(data.results[0]);
        }

        fetchUser();
    },[]);

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