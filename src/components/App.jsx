import React, { Component } from 'react';
import './App.css';
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';
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
