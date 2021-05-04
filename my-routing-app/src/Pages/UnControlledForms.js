import React from 'react';

export const UnControlledForms = () => {
    const name = React.createRef();
    const email = React.createRef();
    const color = React.createRef();

    return (
        <form>
            <div>
                <input type="text" placeholder="name" ref={name} />
            </div>
            <div>
                <input type="text" placeholder="email" ref={email} />
            </div>
            <div>
                <input type="text" placeholder="color" ref={color}/>
            </div>
            <button onClick={ e =>
                alert(`Name is ${name.current.value}
                email is ${email.current.value}
                color is ${color.current.value}
                `)
            }>Submit Form</button>
        </form>
    );
}