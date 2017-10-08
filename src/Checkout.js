import React from "react";
import classNames from "classnames";
import {
  validate,
  validCardNumber,
  validCardExpiration
} from "./InputValidation";

export const MAX_CARD_NUMBER_LENGTH = 16;

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cardNumber: "",
      cardSecurityCode: "",
      expirationMonth: "",
      expirationYear: "",
      visited: {
        name: false,
        cardNumber: false,
        cardSecurityCode: false,
        expirationMonth: false,
        expirationYear: false
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCardNumberChange = this.handleCardNumberChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleCardNumberChange(event) {
    if (event.target.value.length < MAX_CARD_NUMBER_LENGTH) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  }

  errorsForName() {
    if (this.state.visited.name && !this.state.name) {
      return "Please input your name";
    }
    return false;
  }

  errorsForExpiration() {
    if (
      this.state.visited.expirationYear &&
      this.state.visited.expirationMonth &&
      !validCardExpiration(
        this.state.expirationYear,
        this.state.expirationMonth
      )
    ) {
      return "Invalid expiration";
    }
    return false;
  }

  errorsForCard() {
    if (
      this.state.visited.cardNumber &&
      this.state.visited.cardSecurityCode &&
      !validCardNumber(this.state.cardNumber, this.state.cardSecurityCode)
    ) {
      return "Invalid card";
    }
    return false;
  }

  handleBlur = field => event => {
    this.setState({
      visited: { ...this.state.visited, [field]: true }
    });
    console.log(this.state.visited);
  };

  disableSubmit() {
    return !validCardNumber(
      this.state.cardNumber,
      this.state.cardSecurityCode,
      this.state.expirationYear,
      this.state.expirationMonth
    );
  }

  render() {
    return (
      <div className="Checkout">
        <form className="center">
          <div className="pt-control-group pt-vertical">
            <div
              className={classNames("pt-input-group", "pt-large", {
                "pt-intent-danger": this.errorsForName()
              })}
            >
              <span className="pt-icon pt-icon-person" />
              <input
                name="name"
                type="text"
                className={classNames("pt-input")}
                placeholder="Name"
                value={this.state.value}
                onChange={this.handleInputChange}
                onBlur={this.handleBlur("name")}
              />
              <div className="pt-form-helper-text">{this.errorsForName()}</div>
            </div>
            <div className="pt-input-group pt-large">
              <span className="pt-icon pt-icon-credit-card" />
              <input
                name="cardNumber"
                type="text"
                className="pt-input"
                placeholder="Card Number"
                value={this.state.cardNumber}
                onChange={this.handleCardNumberChange}
                onBlur={this.handleBlur("cardNumber")}
              />
              <div className="pt-form-helper-text">{this.errorsForCard()}</div>
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
                onBlur={this.handleBlur("cardSecurityCode")}
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
                onBlur={this.handleBlur("expirationMonth")}
              />
            </div>
            <div className="pt-input-group pt-large">
              <span className="pt-icon pt-icon-calendar" />
              <input
                name="expirationYear"
                type="text"
                className="pt-input"
                placeholder="Year"
                value={this.state.expirationYear}
                onChange={this.handleInputChange}
                onBlur={this.handleBlur("expirationYear")}
              />
            </div>
            <div className="pt-form-helper-text">
              {this.errorsForExpiration()}
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
