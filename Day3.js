const AddressStr = "Coditas,11,Nyati";

const StrArray = AddressStr.split(",");

const result = `Company: ${StrArray[0]} ${StrArray[0].length}, years in op: ${StrArray[1]} ${StrArray[1].length} location: ${StrArray[2]} ${StrArray[2].length} `
console.log(result);

// Output - Company: Coditas 7, years in op: 11 2 location: Nyati 5 

/*
Todays discussed topics:

1. String operations...
split() method - splits a string into an array of substrings, and returns the new array.
concept of template literals using backticks ` ` - allows embedded expressions.
Strings are immutable in JS - cannot be changed once created. because of this, string methods return new strings instead of modifying the original string.
also becoz we cant change the individual characters of string using index like str[0] = 'H' wont work.

---HW we have to practice various string methods...---

2. Comparison operators...
==, != , ===, !==

All variables, objects, functions are stored, passed and returned as references in JS.
Eg... Primitive data types (like numbers, strings, booleans) are compared by their actual values when using === or !==.
But non-primitive data types (like objects and arrays) are compared by their references in memory.

3. when we create an object using variable it is stored in heap memory and, reference of that object is stored in stack memory.
Also hence this `[] === []` returns false because both arrays are different objects stored at different memory locations.
but if we do like this...
let arr1 = [1,2,3];
let arr2 = arr1; OR arr2 = [1,2,3];

then arr1 === arr2 returns true because both variables point to the same object in heap memory.
but [1,2,3] === [1,2,3] returns false because both are different objects stored at different memory locations, in stack memory.

So HEAP MEMORY compares the references of both variables and since both point to same object it returns true.
And STACK MEMORY compares the actual objects and since both are different objects it returns false.

Summarizing... heap memory compares references and stack memory compares actual objects.


4. truthy and falsy values in JS...
falsy values - false, 0, "", null, undefined, NaN
truthy values - all values other than falsy values.

5. Ternary operator - a shorthand for if-else statement.
syntax is as this... condition ? expressionIfTrue : expressionIfFalse;
Problem discussed...
Serve drinks based on age using ternary operator.

*/ 
if( PersonAge >= 30){
    console.log(" Server Alcohol")
} else if( PersonAge < 30 && PersonAge <18){
    console.log(" Serve Beer");
} else  {
    console.log(" Serve Milk");
}


const personAge = 30;
const alcoholCunsumptionAge = 25;
const beerConsumptionAge = 18;

const serveDrink = personAge >= alcoholCunsumptionAge ? "serve alcohol" : 
                personAge >= beerConsumptionAge ? " serve beer" : 
                "serve milk";   

console.log(serveDrink); 
// Output - serve alcohol 


/*

V V V IMP 
1. NAME OF VARIABLE SHOULD BE MEANINGFUL AND AVOID USING SHORTCUTS
2. ALWAYS USE LITERALS INSTEAD OF CONCATENATION + OPERATOR FOR STRINGS
3. STICK TO ONLY ONE STRING STYLE "" OR '' OR `` THROUGHOUT PROGRAM... PREFERABLY USE `` FOR STRINGS
4. NEVER USE == or != ALWAYS USE === or !== EVERYWHERE
5. Remember this HEAP MEMORY COMPARES REFERENCES AND STACK MEMORY COMPARES ACTUAL OBJECTS
6. Also, ternary operators should be used for basic conditions only, avoid complex conditions 
    using ternary operators as it reduces code readability. so for complex conditions use if-else statements.


*/






// String methods to practice...

const sampleString = "i am learning Javascript";

// Basically converts string to uppercase
console.log(sampleString.toUpperCase()); 
// "I AM LEARNING JAVASCRIPT"

// exactly as opp. of above. i.e to lowercase
console.log(sampleString.toLowerCase()); 
//"i am learning javascript"

// Checks if substring is present in given string
console.log(sampleString.includes("Javascript")); 
// true

//sees If string starts with given substring
console.log(sampleString.startsWith("i am")); 
//true

//Checks length of string
console.log(sampleString.length); 
//24

// Returns index of given substring in string
console.log(sampleString.indexOf("am")); 
//2

// Replaces  string element with given new element also remember that it returns 
// a new string and doesnt modify original string...
console.log(sampleString.replace("Javascript", "java")); 
//"i am learning java"

// returns a part of the string between the start and end indexes
console.log(sampleString.slice(2, 4)); 
// "am"

//basically splits string into array of substrings based on given separator in brackets
console.log(sampleString.split(" ")); 
//["i", "am", "learning", "Javascript"]

//repeats the string for given number of times
console.log(sampleString.repeat(2)); 
//"i am learning Javascripti am learning Javascript"

// padEnd() adds padding to the end of the string until it reaches the given length
// syntax - str.padEnd(targetLength, padString)
console.log(sampleString.padEnd(30, ".")); 
//"i am learning Javascript......"









