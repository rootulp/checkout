import React from "react";
import { NumericInput } from "@blueprintjs/core";
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
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleValueChange(valueAsNumber, valueAsString) {
    this.setState({
      expirationYear: valueAsString
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
          <div className="pt-control-group pt-vertical">
            <div className="pt-input-group pt-large">
              <span className="pt-icon pt-icon-person" />
              <input
                name="name"
                type="text"
                className="pt-input"
                placeholder="Name"
                value={this.state.value}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="pt-input-group pt-large">
              <span className="pt-icon pt-icon-credit-card" />
              <input
                name="cardNumber"
                type="text"
                className="pt-input"
                placeholder="Card Number"
                value={this.state.cardNumber}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="pt-input-group pt-large">
              <span className="pt-icon pt-icon-credit-card" />
              <input
                name="cardSecurityCode"
                type="text"
                className="pt-input"
                placeholder="Security Code"
                value={this.state.cardSecurityCode}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="pt-input-group pt-large">
              <span className="pt-icon pt-icon-calendar" />
              <input
                name="expirationMonth"
                type="text"
                className="pt-input"
                placeholder="Month"
                value={this.state.expirationMonth}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="pt-input-group pt-large">
              <NumericInput
                name="expirationYear"
                placeholder="Year"
                leftIconName={"pt-icon-calendar"}
                value={this.state.expirationYear}
                onValueChange={this.handleValueChange}
                buttonPosition={"none"}
              />
            </div>
            <input
              className="pt-button pt-large pt-intent-primary"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Checkout;
