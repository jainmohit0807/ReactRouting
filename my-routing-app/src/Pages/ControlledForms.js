import React, { useState } from 'react';

export const ControlledForms = () => {
    const [name,setName] = useState('');
    const [ email, setemail ] = useState('');
    const [ color, setcolor ] = useState('');

    return (
        <form>
            <div>
                <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="email" value={email} onChange={e => setemail(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="color" value={color} onChange={e => setcolor(e.target.value)} />
            </div>
            <button onClick={ e =>
                alert(`Name is ${name}
                email is ${email}
                color is ${color}
                `)
            }>Submit Form</button>
        </form>
    );
}