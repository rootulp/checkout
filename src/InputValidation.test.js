import React from 'react';
import ReactDOM from 'react-dom';
import {
  validVisaCardNumber,
  validVisaCardSecurityCode,
  validAmericanExpressCardNumber,
  validAmericanExpressCardSecurityCode
 } from './InputValidation';

describe('Visa', () => {
  test('4111111111111111 is a valid card number', () => {
    expect(validVisaCardNumber("4111111111111111")).toBeTruthy()
  });

  test('30000000000004 is an invalid card number', () => {
    expect(validVisaCardNumber("30000000000004")).toBeFalsy()
  });

  test('123 is a valid card security code', () => {
    expect(validVisaCardSecurityCode('123')).toBeTruthy()
  });

  test('1234 is an invalid card security code', () => {
    expect(validVisaCardSecurityCode('1234')).toBeFalsy()
  });
})

describe('American Express', () => {
  test('340000000000009 is a valid card number', () => {
    expect(validAmericanExpressCardNumber('340000000000009')).toBeTruthy()
  });

  test('5500000000000004 is an invalid card number', () => {
    expect(validAmericanExpressCardNumber('5500000000000004')).toBeFalsy()
  });

  test('1234 is a valid card security code', () => {
    expect(validAmericanExpressCardSecurityCode('1234')).toBeTruthy()
  });

  test('123 is an invalid card security code', () => {
    expect(validAmericanExpressCardSecurityCode('123')).toBeFalsy()
  });
})
