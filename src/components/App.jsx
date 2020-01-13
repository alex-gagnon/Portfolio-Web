import React, { Component } from 'react';
import './App.css';
import PipBoy from './PipBoy/PipBoy';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const nav = ['intro', 'projects', 'more']

    return (
      <div className="container">
        <PipBoy nav={nav}/>
      </div>
    );
  }
}

export default App;
