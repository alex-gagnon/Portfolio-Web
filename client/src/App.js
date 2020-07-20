import React from 'react';
import './App.css';
import Loading from "./components/loading.js";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div id="Theme-container">
          <Loading />
        </div>
      </div>
    </div>
  );
}

export default App;
