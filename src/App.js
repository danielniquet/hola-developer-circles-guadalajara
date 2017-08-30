import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="text-effect">
          <h1 className="neon" data-text="Hola Developer Circles Guadalajara." contentEditable>Hola Developer Circles Guadalajara.</h1>
          <div className="gradient"></div>
          <div className="spotlight"></div>
        </div>
      </div>
    );
  }
}

export default App;
