import React from 'react';


class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cardNumber: "",
      cardSecurityCode: "",
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
    if (!validCardNumber(this.state.cardNumber, this.state.cardSecurityCode)) {
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
            Card Security Code
            <input
              name="cardSecurityCode"
              type="input"
              value={this.state.cardSecurityCode}
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

const validCardNumber = (cardNumber, cardSecurityCode) => {
  return validVisa(cardNumber, cardSecurityCode) || validAmericanExpress(cardNumber, cardSecurityCode)
}

const validVisa = (cardNumber, cardSecurityCode) => {
  return validVisaCardNumber(cardNumber) && validVisaCardSecurityCode(cardSecurityCode);
}

const validAmericanExpress = (cardNumber, cardSecurityCode) => {
  return validAmericanExpressCardNumber(cardNumber) && validAmericanExpressCardSecurityCode(cardSecurityCode);
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

const validVisaCardSecurityCode = (cardSecurityCode) => {
  return cardSecurityCode ? cardSecurityCode.length === 4 : false
}

const validAmericanExpressCardSecurityCode = (cardSecurityCode) => {
  console.log(cardSecurityCode.length)
  return cardSecurityCode ? cardSecurityCode.length === 3 : false
}

const validCardExpiration = (expirationMonth, expirationYear) => {
  const expirationDate = new Date(expirationYear, expirationMonth)
  const today = new Date()

  return today < expirationDate;
}

export default Checkout;
