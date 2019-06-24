import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props)
            this.state = {
                counter: 0
            }
    }

addOne = () => {
    let { counter } = this.state
    counter++
    console.log(counter);
    // this.setState({counter: counter }) is the same as ....
    this.setState({ counter })
}


subOne = () => {
    let { counter } = this.state
    console.log(counter);

    if(counter > 0){
        counter--
    }else {
        counter = 0
    }
    // this.setState({counter: counter }) is the same as ....
    this.setState({ counter })
}

reset = () => {
    let { counter } = this.state
    counter = 0
    // this.setState({counter: counter }) is the same as ....
    this.setState({ counter })
}




  render() {
      const { counter } = this.state

    return (
        <div>
        <h1>Counter: {counter}</h1>
        <button onClick = {this.addOne}>Add One</button>
        <button onClick = {this.subOne}>Sub One</button>
        <button onClick = {this.reset}>Reset </button>


        </div>

    );
  }
}

export default Counter;
