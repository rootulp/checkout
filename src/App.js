import React from 'react';

import Checkout from './Checkout';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Checkout</h1>
        </header>
        <Checkout />
      </div>
    );
  }
}

export default App;
