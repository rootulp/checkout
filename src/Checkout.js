import React from "react";
import { validCardNumber, validCardExpiration } from "./InputValidation";

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
      return "Invalid Card Number";
    }
    if (
      !validCardExpiration(
        this.state.expirationYear,
        this.state.expirationMonth
      )
    ) {
      return "Invalid Expiration Date";
    }
  }

  render() {
    return (
      <div className="Checkout">
        <span>{this.renderErrors()}</span>
        <form>

          <div class="pt-control-group pt-vertical">
            <div class="pt-input-group pt-large">
              <span class="pt-icon pt-icon-person"></span>
              <input name="name" type="text" class="pt-input" placeholder="Name" value={this.state.value} onChange={this.handleInputChange} />
            </div>
            <div class="pt-input-group pt-large">
              <span class="pt-icon pt-icon-credit-card"></span>
              <input name="cardNumber" type="text" class="pt-input" placeholder="Card Number" value={this.state.cardNumber} onChange={this.handleInputChange} />
            </div>
            <button class="pt-button pt-large pt-intent-primary">Login</button>
          </div>
          <label>
            Card Security Code
            <input
              name="cardSecurityCode"
              type="input"
              value={this.state.cardSecurityCode}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Expiration Month
            <input
              name="expirationMonth"
              type="input"
              value={this.state.expirationMonth}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Expiration Year
            <input
              name="expirationYear"
              type="input"
              value={this.state.expirationYear}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Checkout;
