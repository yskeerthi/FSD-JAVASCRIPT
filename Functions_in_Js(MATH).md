**js Functions**
```js
function OnetoN(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i); // Print each number
    }
}
OnetoN(11);

```
//Returning an array of numbers

```js

function OnetoN(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i); // Add each number to the array
    }
    return result;
}
console.log(OnetoN(11));
```

        **MATH-FUNCTIONS  **
```js            


Math.min() – Returns the smallest number from a list of numbers.
Math.max() – Returns the largest number from a list of numbers.
Math.sqrt() – Returns the square root of a number.
Math.cbrt()-returns cuberoot of a number.
Math.pow(base, exponent) – Returns base raised to the exponent power.
Math.abs() – Returns the absolute value of a number.
Math.round() – Rounds a number to the nearest integer.
Math.ceil() – Rounds a number up to the next largest integer.
Math.floor() – Rounds a number down to the nearest integer.
Math.random() – Returns a random number between 0 (inclusive) and 1 (exclusive).
Math.log() – Returns the natural logarithm (base e) of a number.
Math.log10() – Returns the base-10 logarithm of a number.
Math.log2() – Returns the base-2 logarithm of a number.
Math.sin() – Returns the sine of an angle (in radians).
Math.cos() – Returns the cosine of an angle (in radians).
Math.tan() – Returns the tangent of an angle (in radians).
Math.asin() – Returns the arcsine (inverse sine) of a number.
Math.acos() – Returns the arccosine (inverse cosine) of a number.
Math.atan() – Returns the arctangent (inverse tangent) of a number.
Math.atan2(y, x) – Returns the arctangent of the quotient of its arguments.
Math.exp() – Returns e raised to the power of a given number.
Math.cbrt() – Returns the cube root of a number.
Math.hypot() – Returns the square root of the sum of squares of its arguments.
Math.trunc() – Returns the integer part of a number by removing any fractional digits.
Math.sign() – Returns the sign of a number (-1, 0, or 1).
Math.clz32() – Returns the number of leading zeros in a 32-bit integer.
Math.imul(a, b) – Performs the 32-bit integer multiplication of two values.
Math.fround() – Returns the nearest 32-bit single precision float representation of a number.
Math.expm1() – Returns e^x - 1.
Math.log1p() – Returns the natural logarithm of 1 + a number.
Math.sinh() – Returns the hyperbolic sine of a number.
Math.cosh() – Returns the hyperbolic cosine of a number.
Math.tanh() – Returns the hyperbolic tangent of a number.
Math.asinh() – Returns the hyperbolic arcsine of a number.
Math.acosh() – Returns the hyperbolic arccosine of a number.
Math.atanh() – Returns the hyperbolic arctangent of a number.
```
These functions allow a wide range of mathematical operations in JavaScript.


//write a code to generate a random integer betwween 0 and 10 included in js

```js
function getRandomInt() {
    return Math.floor(Math.random() * 11); // Multiply by 11 to include 10, then floor to get an integer
}

console.log(getRandomInt());
//output: random nuber btw 0 and 11


//random numbers between -10 and 10 inclusive
```js
function getRandomIntBetweenMinus10And10() {
    return Math.floor(Math.random() * 21) - 10; // Generates number between -10 and 10
}

// Generating 10 random numbers between -10 and 10
for (let i = 0; i < 10; i++) {
    console.log(getRandomIntBetweenMinus10And10());
}
