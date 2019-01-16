import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogMemoryContainer from './DogMemoryContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DogMemoryContainer />
      </div>
    );
  }
}

export default App;
