import React, { Component } from 'react';
import './App.css';
import PipBoy from './PipBoy/PipBoy';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <PipBoy />
      </div>
    );
  }
}

export default App;
