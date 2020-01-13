import React, { Component } from 'react';
import './App.css';
import './App.pip.css';
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render()
  {
    return (
      <div className="container">
        <div className="screen">  
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
      </div>
    );
  }
}

export default App;
