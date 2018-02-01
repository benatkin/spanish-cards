import React, { Component } from 'react';
import MobileFirst from './components/MobileFirst'
import Card from './components/Card'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MobileFirst>
          <Card>
          </Card>
        </MobileFirst>
      </div>
    );
  }
}

export default App;
