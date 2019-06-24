import React, { Component } from 'react';
import Name from './Name'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
        <div>
            <Name />
            <Name />
            <Counter />
            <Counter />
            <Counter />

        </div>

    );
  }
}

export default App;
