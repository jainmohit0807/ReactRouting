import React, {useEffect,useState} from 'react';

export const DataLoader = ({children}) => {
    const [user,setUser] = useState({ name :{}, location:{}, email : ''});
    
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            setUser(data.results[0]);
        }

        fetchUser();
    },[]);

    return React.Children.map(children, child => React.cloneElement(child,{user}))

}