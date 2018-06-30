import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var textTransition = 'Jay Culpepper';
    setTimeout(() => {
      alert('here');
      textTransition = 'developer...';
    }, 1000);
    return (
      <div class="container">
        <div class="content">
          <Welcome name={textTransition} />
        </div>
      </div>
    );
  }
}

export default App;

function Welcome(props) {
  return <h1>{props.name}</h1>;
}
