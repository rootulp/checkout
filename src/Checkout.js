import React from "react";
import classNames from "classnames";
import { InputGroup } from "@blueprintjs/core";
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
      return "Invalid name";
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
        <form>
          <div className="pt-control-group pt-vertical">
            <div
              className={classNames(
                "pt-form-group",
                "pt-form-content",
                "pt-input-group",
                "pt-large",
                { "pt-intent-danger": this.errorsForName() }
              )}
            >
              <InputGroup
                name="name"
                type="text"
                placeholder="Name"
                leftIconName={"pt-icon-person"}
                value={this.state.value}
                onChange={this.handleInputChange}
                onBlur={this.handleBlur("name")}
              />
              <span className="pt-form-helper-text">
                {this.errorsForName()}
              </span>
            </div>

            <div
              className={classNames(
                "pt-form-group",
                "pt-form-content",
                "pt-input-group",
                "pt-large",
                { "pt-intent-danger": this.errorsForCard() }
              )}
            >
              <InputGroup
                name="cardNumber"
                type="text"
                placeholder="Card Number"
                leftIconName={"pt-icon-credit-card"}
                value={this.state.cardNumber}
                onChange={this.handleCardNumberChange}
                onBlur={this.handleBlur("cardNumber")}
              />
              <InputGroup
                name="cardSecurityCode"
                type="text"
                placeholder="Security Code"
                leftIconName={"pt-icon-credit-card"}
                value={this.state.cardSecurityCode}
                onChange={this.handleInputChange}
                onBlur={this.handleBlur("cardSecurityCode")}
              />
              {/* </div> */}
              <span className="pt-form-helper-text">
                {this.errorsForCard()}
              </span>
            </div>
            <div
              className={classNames(
                "pt-form-group",
                "pt-form-content",
                "pt-input-group",
                "pt-large",
                { "pt-intent-danger": this.errorsForExpiration() }
              )}
            >
              <InputGroup
                name="expirationMonth"
                type="text"
                placeholder="Month"
                leftIconName="pt-icon-calendar"
                value={this.state.expirationMonth}
                onChange={this.handleInputChange}
                onBlur={this.handleBlur("expirationMonth")}
              />
              <InputGroup
                name="expirationYear"
                type="text"
                placeholder="Year"
                leftIconName="pt-icon-calendar"
                value={this.state.expirationYear}
                onChange={this.handleInputChange}
                onBlur={this.handleBlur("expirationYear")}
              />
              <span className="pt-form-helper-text">
                {this.errorsForExpiration()}
              </span>
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
