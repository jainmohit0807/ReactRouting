import React from 'react';

export class CounterButtonCB extends React.Component {

    state={
        numberofClick: 0,
    }

    
    increment = () => this.setState({numberofClick : this.state.numberofClick + 1});
    render(){
        debugger;
        const{numberofClick}=this.state;
        return(
            <>
            <h1> Welcome to Counter Button Page</h1>
            <p>You have clicked {numberofClick} number of times</p>
            <button onClick={this.increment}>Number of clicks</button>
            </>
        )
    }
}