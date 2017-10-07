import React from "react";

import Checkout from "./Checkout";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="Title">Checkout</h1>
        <Checkout />
      </div>
    );
  }
}

export default App;
