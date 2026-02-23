/*

Section 1 - JavaScript Getting Started
1. Js was basically designed for interacting with elements in web pages.
2. It follows the ECMAScript standard(THIS IS BASICALLY CORE LOGIC). - So basically its like a guideline of how objects, functions, etc should be stated and all.
basically like a blueprint for a programming language.
3. DOM(WEB PAGE INTERFACE) basically provides interfaces( inteface basically is predefined methods and properties) to interact with HTML elements.
4. browser provides BOM(BROWSER INTERFACE) to interact with Web browser.
4. Js engine runs in Web browswer - it has a parser that analyzes the code, compiler that converts code to machine code and an interpreter that executes the code.
So we have...
V8 engine - used in Google Chrome and Node.js
SpiderMonkey - used in Mozilla Firefox
JScriptCore - used in Safari
Chakra - used in Microsoft Edge
5. Js runs on both client side(Web Browser) and server side(Node.js).
6. Js engines use JIT (Just In Time) compilation to improve performance by compiling code to machine code at runtime.
7.Popular Js editors are VS Code, Atom, Notepad++ etc.
8. use <script element to include Js code in HTML file.

Section 2 - Fundamentals
1. use whitespaces to forat the code and improve readilibity. whitespaces are automatically ignored by Js engine.
2. keep a habit of using ; to terminate each statement.
3. Identifiers are names that we choose to identify variables, functions, classes etc.
 variable is a name that references a value stored in memory.
we MUST use camelCase to declear variables in Js. although we can use block letters to declear constants.
 coz Js is a dynamically typed language, we dont need to specify data type while declearing variable.
 let bookName; // this is declearing a variable
bookName = "Master React"; // this is initializing a variable
4. let bookName; // here the variable is decleared but not initialized, so its value is undefined.
and undecleared variable is a variable which is not decleared at all.
5. constants are reade only reference values hence we cant change them!!! once defined.
6. its a bit funny thing but a NaN is of number data type in Js. and NaN not even equals to itself
7. In JavaScript, object is a complex data type, not a primitive data type.
8. In JavaScript, you can declare a bigint using either let num = 123n; or let num = BigInt(123);.
9. In JavaScript, you can create a symbol using either let sym = Symbol(); or let sym = Symbol('description');
10. numeric saperators are used to improve code readibility by using underscores '_' to separate groups of digits in large numbers.
11. The comparison operators evaluate strings based on the numeric values of the characters, so 'a' < 'B' returns false.
12. = is basically assignment operator
13. we ue 'in' opertor to check the presence of property in a object.
MAKE A NOTE OF THIS THAT...
-> PRIMITIVE VALUES ARE ALWAYS STORED IN STACK - [Since static data has a size that does not change, the JavaScript engine allocates a fixed amount of 
memory space to the static data and stores it on the stack. 
like... Eg. let a = 10;
let b = "ROhan";
Since name and age are primitive values, the JavaScript engine stores these variables on the stack]
-> REFERENCE VALUES ARE ALWAYS STORED IN HEAP, BUT STORES THE VARIABLE NAME TO STACK WHICH HAS THE REFERENCE OF THE OBJECT 
IN THE HEAP[Unlike the stack, JavaScript stores objects (and functions) on the heap. The JavaScript engine doesn’t 
allocate a fixed amount of memory for these objects. Instead, it’ll allocate more space as needed.
Eg. let person = {
  name: 'John',
  age: 25,
};
the name and age is stored in stak just the person is stored in heap just the person is stored in stack whihc has the reference
to the hep where the propertios of the person are stored]
ALSO...
when u store a variable into an other variable it just copies the value and stored it to the same value to new variable in stack.
Eg. let name = "ROhh";
let newname = name;
name and newname are both stored individually in stack as both having the same value "Rohh";
Also copying a reference from one variable to another, creates a reference for the new variable also to the same obj.
hence changing the value of object in one variable will reflect to another variable.
in arrays push is used to add an element at the end of array and unshift is used to add an element at the beginning.


Section 3
1. arithematic operators are used to do mathematical peration in javascript.
the remainder operator returns retuens the remainder left over when a number is divided by another number.
2. even if the divident or dividor is not a number its converted into a number using Number Function and then the remainder
is calculated.
3. assignment operator is basically used to assign a variable.
4. if we want to assign single values to multiple variables we can use chaining like...
a = b = c
5. Unary operators work on ONE VALUE. when we apply unary plus to a non numeric value it performs a number conversion...
like +"222" will be converted to a number i.e. 222
also unary -"222" will give numeric negative... -222 value.
In prefix increment -> value is incremented before the statement is evaluated Eg. ++2
In postfix increment -> value is incremented only after the statement is evaluated Eg. 2++
5. to compare values we use comparison operators.
6. let result = value1 && value2 && value3;
here in the example... && operator evaluates from left to right, it basically gives the LAST TRUTHY VALUE/FIRST FALSY VALUE.
7. Similarly for let result = value1 || value2 || value3;
here... same... evaluates from left2right, its basically gives the FIRST TRUTHY VALUE/LAST FALSY VALUE.
8. operator precidence... is like... (not)! > (and)&& > (or)||    

Section 4
1. Note that avoid using Nested if statements... instead use logical comparison operators(&&, ||)
2. for simple logic use ternary operator but for complex conditions prefer if..else it looks more readable
3. switch statement is used rather than complex if..else if.. else conditions.
4. for, do..while, while are types of loops, also we can use break statements inside a loop to terminate the loop instantly.
5. to use break in nested loops we do like this using label
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i + j == 4) {
      break outer; // we assign a label to outer loop and use it with break to break the outer look via inner loop.
    }
    console.log(i, j);
  }
}
similar to this, the concept of lbel can also be used with continue statement.
6. , comma operator is extremely useful when using for loop updating multiple variables once.
comma operator evaluates the values from left to right and returns the value of right expression...
Eg. let x = 10;
x++;
let y = x + 1;

console.log(x, y);


Section 5
1. we can use 'return' statements in a function.
2. function explicitely return undefined if we dont explicitely return a value
3. the arguments variable is an array like object inside a function its basically functional arguments.
Eg.  function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15
4. functions are hoisted that enables us to call them before even declearing it.
5. functions are first class citizens in Js, also we can pass a function to other functions as arguments, return them in 
    a function, store them in variables also.
6. Anonymous function is a function without a name...
syntax...
    (function () {
        //...
    });
anonymous function should be in parenthesis otherwise it will give error.
we can also store anonymous function to variables... let a = function(){ ...code };
also can be used as arrow function.
Eg. let show = () => console.log('Anonymous function');
7. IIFE -> is imediately invoked function execution
Eg. (function() {
    console.log('IIFE');
})(); // out IIFE
If we wnat a function to execute immediately we use IIFE... IIFE are basically anonymous functions...
8. JS passess all the arguments to a function by their values!
also functional arguments are basically local variables in JS
MAIN ADVANTAGE OF ANONYMOUS FUNCTION IS THAT WE CAN USE THEM AS ARGUMENTS TO OTHER FUNCTIONS...
9. In JavaScript all functional arguments are passed by value, this means that the Js engine creates a local copy of the
argument variable inside the memory, hence any change in value of the argument inside the funtion doesnt affect the 
original value outside the function...
10. but, when we pass an object as an argument to a functionm, the argument is basically a reference of the object hence
when we change the object properties inside the function, the original object gets modified as, the argument was basically 
a reference to the original obj. and not a newly created obj.
11. A recursive function is a fiunction that calls itself, and it keeps on recursively calling itself until a termination
condition is met.
12. In Js the parameter has default value of undefined.
Eg. function say(message) {
    console.log(message);
}
say(); // undefined

13. we can also use other parameters as default values like, it is allowed in Js!
Eg. function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}
console.log(add()); // 4
14. the initialization of parameter values is also crutial as if we assign a default value to a parameter that has not been 
initialized yet then we will get an error...
function subtract( x = y, y = 1 ) { // here before saying what y is equal to we are saying x = y??
    return x - y;                    // Js engine will say what is y?? idk ??? hence error
}
subtract(10);
// out: Uncaught ReferenceError: Cannot access 'y' before initialization

15. We can also use functions ka return values for a parameter...
Eg. let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}
let fullPrice = getPrice(100);
console.log(fullPrice); // 110


Section 6
- JavaScript Object Methods.
let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        console.log('Hello, World!');
        return this.firstName + ' ' + this.lastName;
    }
};
person.greet();
...above is a concise method syntax, ideally we should define methods like this... in objects.
... the this. keyword is used to refer the key belonging to the same object.

- JavaScript Constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}
...so above code is of constructor function, we have to define the constructor function like above...follow the exact syntax
...we also have to use this. keyword to define keys and functions in the constructor function... 
...also its important to note, the constructor function's name starts with a capital letter!! \

we can invoke the constructor function and create a new person1 object like this...
let person = new Person("John", "Doe");
console.log(person.getFullName());
// similarly we can create different objects like for person2 then, person3 etc..

so when we use new keyword Js basically creates a new object, with the object name pointing to that object.
also constructors are always used in classes! just remember this...
also, when we use constructor function we should always use "prototype" to declare methods inside constructor functions
this is becoz for n new objects its very less memory efficient to create n methods of the same type, right??
hence use Prototype to create methods in constructor...
function Car(brand) {
    this.brand = brand;
}

// all Cars basically share this one function in memory
Car.prototype.drive = function() {
    console.log("Vroom!");
};
// its important to, note that dont we never use arrow functions as they dont have their own "this keyword" hence 
// they cant be used as constructors.

- JavaScript Prototype
1. in Js objects can inherit features from another via prototypes. Every object has its own property called prototype
As... prototype is also an object itself, it also has its own prototype -> this is basically prototype chain.
1. REMEMBER THIS... whenever function is a value of the objects property its called a method, Hence "method" is a 
property and its value is a function...
2. its important to note that...
    WE PUT UNIQUE PROPERTIES OF THE OBJECTS INSIDE THE CONSTRUCTOR (using this.)
    WE PUT "SHARED" PROPERTIES OF THE OBJECT AS THE PROTOTYPE IN CONTRUCTOR.

// Eg.  1. CONSTRUCTOR basically handles unique data
    function User(username) {
        this.username = username; 
    }
    // 2. PROTOTYPE handles shared actions
    User.prototype.login = function() {
        console.log(this.username + "  is logging in... ");
    };

    const user1 = new User("Alice");
    const user2 = new User("Bob");

// user1.login and user2.login are the EXACT SAME function in memory.
// 1 million users = 1 single "login" function. RAM is happy!
// if we want find a method...
// myobject(searches its methods) [if notfound->] myobject.prototype(methods in myobject.prototype) [if notfound->] Object.prototype

- Prototypal Inheritance
1. Inheritance in Javascript is basically called prototuypical inheritance.

- Javascript this keyowrd
1. this keyword used in a an object refers to the properties of the object itself.
2. In global context this, refers to the global object which is the "window" object
3. to stop Js accedentially referencing the global we use the property called "use strict"
























*/