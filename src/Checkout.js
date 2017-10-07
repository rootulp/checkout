import React from 'react';


class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cardNumber: "",
      csc: "",
      expirationMonth: "",
      expirationYear: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  renderErrors() {
    if (!validCardNumber(this.state.cardNumber, this.state.csc)) {
      return "Invalid Card Number"
    }
    if (!validCardExpiration(this.state.expirationMonth, this.state.expirationYear)) {
      return "Invalid Expiration Date"
    }
  }

  render() {
    return (
      <div className="Checkout">
        <span>{this.renderErrors()}</span>
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
              type="input"
              value={this.state.cardNumber}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            csc
            <input
              name="csc"
              type="input"
              value={this.state.csc}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Expiration Month 
            <input
              name="expirationMonth"
              type="input"
              value={this.state.expirationMonth}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Expiration Year
            <input
              name="expirationYear"
              type="input"
              value={this.state.expirationYear}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const validCardNumber = (cardNumber, csc) => {
  return validVisa(cardNumber, csc) || validAmericanExpress(cardNumber, csc)
}

const validVisa = (cardNumber, csc) => {
  return validVisaCardNumber(cardNumber) && validVisaCsc(csc);
}

const validAmericanExpress = (cardNumber, csc) => {
  return validAmericanExpressCardNumber(cardNumber) && validAmericanExpressCsc(csc);
}

const validVisaCardNumber = (cardNumber) => {
  if (cardNumber) {
    return cardNumber.length === 16 && cardNumber.startsWith("4");
  }
  return false
}

const validAmericanExpressCardNumber = (cardNumber) => {
  if (cardNumber) {
    return cardNumber.length === 15 && 
          (cardNumber.startsWith("34") ||
            cardNumber.startsWith("37"));
  }
  return false
}

const validVisaCsc = (csc) => {
  return csc ? csc.length === 4 : false
}

const validAmericanExpressCsc = (csc) => {
  return csc ? csc.length === 3 : false
}

const validCardExpiration = (expirationMonth, expirationYear) => {
  return true
}

export default Checkout;
