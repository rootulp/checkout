export const validCardNumber = (cardNumber, cardSecurityCode) => {
  return (
    validVisa(cardNumber, cardSecurityCode) ||
    validAmericanExpress(cardNumber, cardSecurityCode)
  );
};

export const validVisa = (cardNumber, cardSecurityCode) => {
  return (
    validVisaCardNumber(cardNumber) &&
    validVisaCardSecurityCode(cardSecurityCode)
  );
};

export const validAmericanExpress = (cardNumber, cardSecurityCode) => {
  return (
    validAmericanExpressCardNumber(cardNumber) &&
    validAmericanExpressCardSecurityCode(cardSecurityCode)
  );
};

export const validVisaCardNumber = cardNumber => {
  if (cardNumber) {
    return cardNumber.length === 16 && cardNumber.startsWith("4");
  }
  return false;
};

export const validAmericanExpressCardNumber = cardNumber => {
  if (cardNumber) {
    return (
      cardNumber.length === 15 &&
      (cardNumber.startsWith("34") || cardNumber.startsWith("37"))
    );
  }
  return false;
};

export const validVisaCardSecurityCode = cardSecurityCode => {
  return cardSecurityCode ? cardSecurityCode.length === 3 : false;
};

export const validAmericanExpressCardSecurityCode = cardSecurityCode => {
  return cardSecurityCode ? cardSecurityCode.length === 4 : false;
};

export const validCardExpiration = (expirationYear, expirationMonth) => {
  const expirationDate = new Date(expirationYear, expirationMonth);
  const today = new Date();

  return today < expirationDate;
};
