import React, { Component } from 'react';

class Name extends Component {
    constructor(props){
        super(props)
            this.state = {
                name: "Rick"

            }
    }

changeName = () => {
    //copy state
    let newName = this.state.name
    //make your changes
    // if(newName === "Rick"){
    //     newName = "Morty"
    // } else {
    //     newName = "Rick"
    // }
    //is the same as.......
    newName = newName === "Rick" ? "Morty" : "Rick"

    //set state
    this.setState({name: newName})
}


  render() {
      const { name } = this.state

    return (
        <div>
        <h1>{name}</h1>
        <button onClick = {this.changeName}>Change Name</button>


        </div>

    );
  }
}

export default Name;
