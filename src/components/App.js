import React, { Component } from 'react';

import Nav from './Nav';
import Content from './Content';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Nav />
        <Content />
      </div>
    );
  }
}
export default App;
