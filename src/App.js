import React, { Component } from 'react';
import MicroBlog from './components/MicroBlog';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MicroBlog/>
      </div>
    );
  }
}

export default App;
