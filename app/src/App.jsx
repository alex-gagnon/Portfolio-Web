import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
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

export default App;
