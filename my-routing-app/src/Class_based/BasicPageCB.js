import React from 'react';

export class BasicPageCB extends React.Component {
    
    render(){
        const {message} = this.props;
        return(
        <>
        <h1> Welcome to Basic Page of Class based</h1>
        <p>You have {message} messages</p>
        </>
        )
    }
}