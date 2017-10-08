# checkout

[![License](https://img.shields.io/:license-mit-blue.svg)](https://rootulp.mit-license.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> source code for [checkout](https://https://rootulp.github.io/checkout/) - a take home coding project

## Questions
> How long did you spend working on the problem? 

~6 hours spread across Friday night / early Saturday
> How much time did you spend thinking about the design before writing your code?

~1 hour. I got distracted learning about [Stripe Elements](https://stripe.com/elements) and I got design inspiration from their demos but the final product is still pretty bare bones

> What are the UI/UX usability features you implemented, or thought about implementing? 

I really wanted to split the Card Number input into several inputs based on the first few numbers that are typed but didn't get to work on it (yet).

> How do they help validate the user input?

I implemented simple input validation that waits until a user has visited a field prior to warning them that their input is invalid.

> What would an form submission/API payload of this look like? 

Form submission sends data to the specified location via the HTTP method specified in the `<form>` tag. It looks like [this](https://www.dropbox.com/s/u9xd2hahhnu8r4i/Screen%20Shot%202017-10-08%20at%203.41.47%20AM.png?dl=0) 

> How would you deal with validation errors that may come from that API response?

Depending on the nature of the validation error, we could potentially improve the error validation on the front end to surface errors to the user faster and avoid the round trip.

> How would you test this component?

I implemented a few simple Jest tests for input validation. There are many more edge cases that I'd like to test especially surrounding expiry date.

> What are some styling and layout considerations for these types of form inputs?

- Fields like month & year are short and can occupy less space (max four characters) than name and card number
- Card number is variable length and properly splitting digits into groups could aid a user during input
- Usually a card number will be filled out prior to a user reaching the CVC field. This means we could pre-emptively re-size the field according to the number of digits expected (based on card type).

## License

[MIT](https://rootulp.mit-license.org/) © [Rootul Patel](https://rootulp.com)
