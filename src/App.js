import React, { Component } from 'react';
import { TimedText } from './components/TimedText';
import { Clock } from './components/Clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'content'}>
          <TimedText />
          <Clock />
        </div>
      </div>
    );
  }
}

export default App;
