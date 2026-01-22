//MISTAKE -> const randomNum = Math.random(num => num > 15 && num < 10 ).parseInt();


// Inbuilt Math Object Methods

// Math.round() basically rounds a number to the nearest integer
console.log(Math.round(6.2)); // Out: 6

// Math.ceil() rounds a number up to the next largest integer
console.log(Math.ceil(4.1)); // Out: 5

// Math.floor() rounds a number down to the largest integer less than or equal to a given number
console.log(Math.floor(2.2)) // Out: 2

// Math.random() basically returns a number that is.. num >= 0 and num < 1 
//Eg. Random number between max and min excluding max and min
Math.random() * (max - min) + min;
// Eg. Random number between two values
const min = 1;
const max = 10;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // Out: A random number between 1 and 10 (including both 1 and 10)

// Math.exp() returns e raised to something equals...
Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1

// Math.max() returns the largest of zero or more numbers
// Preferrably use reduce, becoz as spread operator struggles with large arrays
const numArr = [1, 5, 3, 9, 2];
const mymax = numArr.reduce((a, b) => Math.max(a, b), -Infinity); // here 'a' is accumulator and 'b' is current value
console.log(mymax)
// also never forget to provide initial value to accumulator, here its... -Infinity

// Math.min() Basically opposite of Math.max()

// Math.pow() returns the... base^exponent means 2^3 = 2*2*2 = 8
Math.pow(7, 2); // 49
Math.pow(4, 0.5); // 2

// Math.sign() returns the sign of a number +ve/-ve/0
Math.sign(-7); // -1
Math.sign(0); // 0
Math.sign(9); // 1

// Math.sqrt() returns the square root of a number
Math.sqrt(49); // 7
Math.sqrt(2); // 1.4142135623730951

/*
Todays session summary: 22 / 01 / 2026

1. Understood Core operation of Inheritance how its operated at ground level 
as in creating basic variable such as...
const a = 10
where the variable acts as an object and is inherited
from number class, hence we can use methods of number class on that variable.
various Math methods were discussed.
As Math works on numbers, hence it is inherited from Number class.

2. Various Math methods were discussed such as...
Math.round(), Math.ceil(), Math.floor(), Math.random(), Math.exp(),
Math.max(), Math.min(), Math.pow(), Math.sign(), Math.sqrt()

Question:- 
Generate any Random Integer between 10 and 15 (both inclusive)
Solution:-

Math.round(Math.random() * (15 - 10) + 10);
Using reference of above discussed method and standard form...
Math.round(Math.random() * (max - min + 1)) + min
To exclude 10 use Math.floor() instead of Math.round()
To exclude 15 use Math.ceil() instead of Math.round()


*/