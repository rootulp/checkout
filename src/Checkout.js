import React from 'react';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form>
        <label>
          Name
          <input
            name="name"
            type="input"
            checked={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Card Number
          <input
            name="cardNumber"
            type="number"
            value={this.state.cardNumber}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          CVV2
          <input
            name="cvv2"
            type="number"
            value={this.state.cvv2}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Expiration Month 
          <input
            name="expirationMonth"
            type="number"
            value={this.state.expirationMonth}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Expiration Year
          <input
            name="expirationYear"
            type="number"
            value={this.state.expirationYear}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Checkout;
