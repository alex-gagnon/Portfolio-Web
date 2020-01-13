import React, { Component } from 'react';
import './App.css';
import SVG from './pattern.svg'
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.patternBackground()
  }

  patternBackground() {
    document.body.style.backgroundImage = `url(${SVG})`
  }

  render()
  {
    return (
      <div className="container">
        <header className="App-header">
          <Header />
        </header>
        <main className="App-main">
          <Main />
        </main>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
