
**Original Array and For-of Loop:**

```js
let arr = [1, 2, 3, 4, 5, 9];
console.log(arr);

let brr = [];
// For-of loop
for (const ele of arr) {
    brr.push(ele * ele);
}
console.log(brr); // Output: [1, 4, 9, 16, 25, 81]
````````````````````
**squaring arr elements**
```js

let arr=[1,2,3,4,5,9];
console.log(arr);
let brr=arr.map(function(ele)
{
    return ele*ele;
});

console.log(brr);

````````````````````````````````````
doing by using seperate functions
```js
function twice(ele)
{
    return 2*ele;
}
function square(ele)
{
    return ele*ele;
}
function add10(ele)
{
    return ele+10;
}
setTimeout(square,5*1000);
let arr=[1,2,3,4,5,9];
console.log(arr);
let brr=arr.map(square);

console.log(brr);


`````````````````````````````````````
ARROW-FUNCTION
```js

let arr=[1,2,3,4,5,9];
console.log(arr);
let brr=arr.map((ele)=>{
    return ele*ele;
});

console.log(brr);


``````````````````````
simple_arrow_function
```js
let arr=[1,2,3,4,5,9];
console.log(arr);
arr=arr.map(ele=>ele*ele);
console.log(arr);
````````````````````
// Sample array
let numbers = [1, 2, 3, 4, 5];

// 1. Using a regular function
```js
let doubled1 = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled1); // Output: [2, 4, 6, 8, 10]

// 2. Using an arrow function (with parentheses around the parameter)
let doubled2 = numbers.map((num) => {
    return num * 2;
});
console.log(doubled2); // Output: [2, 4, 6, 8, 10]

// 3. Using an arrow function (without parentheses for single parameter)

let doubled3 = numbers.map(num => {
    return num * 2;
});
console.log(doubled3); // Output: [2, 4, 6, 8, 10]

// 4. Using an arrow function (implicit return, single line)
let doubled4 = numbers.map(num => num * 2);
console.log(doubled4); // Output: [2, 4, 6, 8, 10]

// 5. Using a named function
function doubleValue(num) {
    return num * 2;
}
let doubled5 = numbers.map(doubleValue);
console.log(doubled5); // Output: [2, 4, 6, 8, 10]

// 6. Using `map()` with an index parameter (access index of each element)
let doubledWithIndex = numbers.map((num, index) => {
    return num * index;
});
console.log(doubledWithIndex); // Output: [0, 2, 6, 12, 20]

// 7. Using `map()` with an object as `thisArg`
let multiplier = { factor: 2 };
let doubledWithThisArg = numbers.map(function(num) {
    return num * this.factor;
}, multiplier);  // `this` refers to `multiplier`
console.log(doubledWithThisArg); // Output: [2, 4, 6, 8, 10]
