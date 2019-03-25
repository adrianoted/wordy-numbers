## Wordy-Numbers
This is a small project whose purpose is to turn numbers into words. <br/><br/>

### Rules  
`positive integers` - Print number in english.
- Numbers between 20 and 99 use hyphens. e.g. forty-five
- Use a space to separate all other words. e.g. one hundred twenty-three
- The word 'and' is used to separate the tens space from the hundreds space in each period
- ...also the word 'and' is used to separate the tens and ones space from the lowest number the left of the tens place for numbers over 1000.
- Support integers up to ±2 Quadrillion .
- Consult this list for large number names. Always use the 'short scale' popular in the
USA.
<br/>

`Zero/nil` - Print 'zero'. <br/>
`Negative integers` - Print 'negative' before the number <br/>
`Decimal numbers` - Print the number to the left of the decimal then 'point' then the numbers to the right of the decimal each digit at a time. ( Support at least 5 decimal places).<br/>
`Non-numbers` - Strings that evaluate to numbers should be converted to numbers. NaN values must throw an error.<br/>
`Positive / Negative infinity` - Print 'infinity' or 'negative infinity'
<br/>
<br/>

## Scripts

### `npm install`
### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.