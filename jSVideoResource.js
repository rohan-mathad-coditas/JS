//Lesson 1 : Javascript Basics

//alert(“Good Morning”);

// To display our name in popup
// alert(“Rohan”)

// We can do normal Math calculations in  the console…
// 2+2
// -> 4

// Challenge Exercise
// 1.
const tShirt = 20;
const socks = 8;
const dinnerPlates = 10;
const totalCost = tShirt + socks + dinnerPlates;
console.log(totalCost);


// 2.
const accountBalance = 100;
const costOnLunch = 20;
const costOnDinner = 50;
const jobIncome = 200;

const accountHolderBalance = accountBalance + jobIncome - costOnDinner - costOnLunch;
console.log(accountHolderBalance);


//Lesson 2 : Numbers and Math.

const items  = 10.9 * 2 + 2;
console.log(items) // 42.75

// We use Math operators to do math operations in javascript
// Operator precedence is order of operations… using * / same priority
// + - also have same priority


// We can use brackets to specify the way of calculation…
// (1+1) * 2 
// output 4

// To calculate Estimated Tax - 
// Lets say the tax on items is 8% hence…
const taxableAmountOnItems = items * (8/100);
// 1.9040000000000001

//calculations using floats can be innaccurate hence we always use calculations 
// hence with money we use calculations with reference to cents 
const basketBall = 2095; // 20.95$
const adultTshirt = 799; // 7.99$
const totalAmount = ((2095 + 799) * 0.1 ) / 100; 
// 2.894

// we can use Math.round to round it to the nearst integer
console.log(Math.round(((2095 + 799) * 0.1 )) / 100);
// 2.89 cents actual number of Estimated tax on products

//Challenge Exercises
//1.
const soup = 10;
const burgers = 8;
const iceCream = 5;
const orderCost = soup + (burgers * 3) + iceCream;
console.log(orderCost); //39

//2.
const eachPersonPays = orderCost / 3; //13

//3.
const toaster = 1850; //in cents
const shirt = 750;
const totalAmt = (toaster + (2 * shirt)) / 100;
console.log(totalAmt);

//4. 
const taxAmt =  totalAmt * 0.1; // 3.35

//5.
const newTaxAmt = totalAmt * 0.2; // 6.7

//6.
const total = toaster + basketBall + shirt;
const shippingCost = 499;
const totalBeforeTax = total + shippingCost;
const estimatedTax = totalBeforeTax * 0.1;
const orderTotal = totalBeforeTax - estimatedTax;
console.log(orderTotal);
// 4674.6

//7
// to round down a number use Math.floor
console.log(Math.floor(2.6)); // 2
// to round up a number use Math.ceil
console.log(Math.ceil(2.6)) // 3

//8
const givenCelsius = 25;
const celsiusToFarenheight = (givenCelsius * 9/5) + 32;
console.log(celsiusToFarenheight);
const givenFarenheight = 100;
const farenheightToCelsius = (givenFarenheight - 32) * 5/9;
console.log(farenheightToCelsius);
// 77
// 37.77777777777778


// Lesson 3 : Strings

//concatenation two strings
// 'some' + 'one' 
// output someone

typeof 'hello' 
//string

//type coercion
// 'hello' + 3
// output hello3  is bydefault converted to string

//to calculate amount in dollar using string concatenation
'$'  + (2095 + 799) / 100;
// '$28.94'

alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);
// we will get an alert => Items (2): $28.94

const newStrr = 'some\ntext';

// strictly use '' to create string 
// if we need interpolation, multiline strings use ``
/*
some
text
*/

// Challenge exercises
//1.
const sentence = 'My name is'
const name = 'Rohan';
const concatSentence = sentence + ' ' + name;
// 'My name is Rohan'

// 2.
const coffee = 5;
const bagel = 3;
const totalCost = `Total cost :${coffee + bagel}`;
totalCost;
// 'Total cost :8'

// 3.
alert(totalCost)


// Lesson 4 : 
