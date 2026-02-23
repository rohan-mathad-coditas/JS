/*
set is a built-in object that allows you to store unique values of any type, whether primitive values or object references.
so basically it cant have duplicate values.


CODEACADEMY NOTES - DAY 5

1. Functions.

basically functions are blocks of code designed to perform a particular task.
function declaration syntax -
function functionName(parameters) {
    // code to be executed
}

identifiers - names given to variables and functions to identify them.
Eg. variable names, function names, etc.

Parameters - names listed in the function definition.
Arguments - values passed to the function when it is invoked.

to define a function using a variable we can do like this...
const myFunction = function(parameters) {
    // code to be executed
};

to define a function using arrow function syntax we can do like this...
const myFunction = (parameter1, parameter2) => {
    // code to be executed
};
we can even call the variable as a function like this...
myFunction(arg1, arg2); //VVVVVVVVV IMP NEVER KNEW THIS

function definition can be made coincise using arrow functions like this...
const add = (a, b) => a + b; // returns the sum of a and b

hence...
function expression - a combination of variables, operators, and values that produces a result.
arrow function - a concise way to write functions using the => syntax.
function declaration - a way to define a function using the function keyword.

******
IN JS FUNCTIONS ARE FIRST CLASS CITIZENS MEANING THEY CAN BE TREATED LIKE ANY OTHER VARIABLE.
FUNCTIONS CAN BE PASSED AS ARGUMENTS TO OTHER FUNCTIONS AND CAN BE RETURNED FROM OTHER FUNCTIONS.
// Example of a function that takes another function as an argument
function greet(name, formatter) {
    return "Hello, " + formatter(name);
}   
function upperCaseName(name) {
    return name.toUpperCase();
}
console.log(greet("Rohan", upperCaseName)); // Out: Hello, ROHAN

As functions are first class citizens, functions CAN HAVE PROPERTIES AND METHODS JUST LIKE OBJECTS !!!!!!!
Properties of functions - .length, .name, .prototype
Methods of functions - call(), apply(), bind()


*****
A higher-order function is a function that either takes one or more functions as arguments,
or returns a function as its result or both.
Eg. map(), filter(), reduce() are higher-order functions.
callback function - a function that is passed as an argument to another function and is executed inside that function.
Eg. In the above greet() function, upperCaseName() is a callback function.

*/


/*
-----------------------------------------------------------------------------------------------------------
2. Scope

scope refers to the visibility or accessibility of variables and functions in different parts of your code.

block scope - variables declared with let or const inside a block (enclosed by {}) are only accessible within that block.
function scope - variables declared within a function are only accessible within that function.
global scope - variables declared outside of any function or block are accessible from anywhere in the code.

global variables - variables that are declared in the global scope and can be accessed from anywhere in the code.
local variables - variables that are declared within a function or block and can only be accessed within that function or block.
global namespace - the global scope that contains all global variables and functions, this basically helps to avoid naming conflicts.

its very important to manage scope properly to avoid unintended consequences and bugs in your code.
scope pollution - when too many variables are declared in the global scope, it can lead to naming conflicts and make it difficult to manage your code.
*/


/*
-----------------------------------------------------------------------------------------------------------
3. Arrays
Arrays are used to store multiple values in a single variable.

Array declaration syntax -
const arrayName = [element1, element2, element3, ...];

we can access array elements using their index, which starts from 0.
Eg. const myArray = [10, 20, 30];
myArray[0]; // returns 10

we can also use various array methods to manipulate arrays, such as 
push(), pop(), shift(), unshift(), splice(), slice(), etc.

push() - adds one or more elements to the end of an array and returns the new length of the array.
const myArray = [1, 2, 3];
myArray.push(4); // myArray is now [1, 2, 3, 4]

pop() - removes the last element from an array and returns that element.
const myArray = [1, 2, 3];
const lastElement = myArray.pop(); // lastElement is 3, myArray is now [1, 2]   

shift() - removes the first element from an array and returns that element.
const myArray = [1, 2, 3];
const firstElement = myArray.shift(); // firstElement is 1, myArray is now [2, 3]

unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
const myArray = [2, 3];
myArray.unshift(1); // myArray is now [1, 2, 3]

splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const myArray = [1, 2, 3, 4];
myArray.splice(1, 2, 'a', 'b'); // myArray is now [1, 'a', 'b', 4]

slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
const myArray = [1, 2, 3, 4, 5];
const newArray = myArray.slice(1, 4); // newArray is [2, 3, 4]

length property - returns the number of elements in an array.
const myArray = [1, 2, 3];
console.log(myArray.length); // Out: 3

some built in array methods are mutating (they change the original array) 
and some are non-mutating (they do not change the original array).
for instance mutating ones are - push(), pop(), shift(), unshift(), splice()
non-mutating ones are - slice(), concat(), map(), filter(), reduce()

variables declared with const to an array, cannot be reassigned, but the contents of an array declared with const can be modified.

arrays can be nested within other arrays to create multi-dimensional arrays.
const multiDimensionalArray = [[1, 2], [3, 4], [5, 6]];
console.log(multiDimensionalArray[1][0]); // Out: 3 
*/

/*
------------------------------------------------------------------------------------------------------------
4. Iterators

Iterators are methods that allow you to traverse and manipulate arrays in a functional programming style.
Iterators take a callback function as an argument, which is executed on each element of the array.
Iterators do not modify the original array, but return a new array or value based on the operation performed.

i) forEach() - executes a provided function once for each array element.
--------------a method that will do something to each of the values in the array and return--------------
const myArray = [1, 2, 3];  
myArray.forEach((element) => {
    console.log(element); 
}); 
// Out: 1 2 3 (each on new line)

ii) map() - creates a new array populated with the results of calling a provided function on every element in the calling array.
const myArray = [1, 2, 3];
const newArray = myArray.map((element) => {
    return element * 2; // BASICALLY WHAT IT DOES THAT IT CREATES A NEW ARRAY, AND AT EACH ELEMENT IT TRAVERCES THE OLD ARRAY AND RETURNS THE CHANGES AND PLACES THE ELEMENTS IN TEH NEW ARRAY;
    // SO element basically goes to each element in old array and returns the modified value to new array!!! smart see!
});
// Out: [2, 4, 6]

Q. Call the .filter() method on randomNumbers to return values that are less than 250. 
Save them to a new array called smallNumbers, declared with const.
A. const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num =>{
  return num < 250;
})

iii) filter() - creates a new array with all elements that pass the test implemented by the provided function.
Q. Call the .filter() method on randomNumbers to return values that 
are less than 250. Save them to a new array called smallNumbers, declared with const.
A. const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num =>{
  return num < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

iv) findIndex() - returns the index of the first element in the array that evaluates to true for that condition.
Q.Invoke .findIndex() on the animals array to find the index of the element that has the 
value 'elephant' and save the returned value to a const variable named foundAnimal.
A. const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})

Let’s see if we can find the index of the first animal that starts with the letter 's'.
Q. Call .findIndex() on the animals array and return the index of the first element that starts with 's'. 
Assign the returned value to a const variable named startsWithS
A. const startsWithS = animals.findIndex(animal => {
  return animal.startsWith('s');
})


v) reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 is the initial value of accumulator
// Out: 10


vi) every() - tests whether all elements in the array pass the test implemented by the provided 
function. It returns a Boolean value.

SUMMARY OF ITERATOR METHODS:
.forEach()
Preview: Docs Loops over a given array, passing each item in the array into the callback function provided.
 is used to execute the same code on every element in an array, but does not change the array and returns undefined.
.map()
Preview: Docs Loading link description
 executes the same code on every element in an array and returns a new array with the updated elements.
.filter()
Preview: Docs Loading link description
 checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
.findIndex()
Preview: Docs Loading link description
 returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfy the condition.
.reduce()
Preview: Docs Executes a reducer function on each element of an array, resulting in a single output value.
 iterates through an array and takes the values of the elements and returns a single value.
All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.
You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).

*/



/*
------------------------------------------------------------------------------------------------------------
5. Objects 

Objects basically store collections of key-value pairs.
OBJECT LITERAL is a comma-separated list of key-value pairs wrapped in curly braces {}.
Eg. const myObject = {
    key1: value1,
    key2: value2,
    key3: value3
};
key-value pair is a property of an object, where the key is a string (or symbol) that identifies the property.
functions that are stored as object properties are called methods.
Eg. const myObject = {
    key1: value1,
    key2: value2,
    method1: function() {
        // code to be executed
    } 
};
we can access methods using dot notation or bracket notation.
Eg. myObject.method1(); OR myObject['method1']();

we can add, modify, delete properties of an object using dot notation or bracket notation.
Eg. const myObject = {
    key1: value1,
    key2: value2
};
myObject.key3 = value3; // adds a new property key3 with value value3
myObject['key4'] = value4; // adds a new property key4 with value value4
myObject.key1 = newValue1; // modifies the value of key1 to newValue1
delete myObject.key2; // deletes the property key2

we can navigate complex objects using nested dot notation or bracket notation.
Eg. const myObject = {
    key1: {
        subKey1: value1,
        subKey2: value2
    },
    key2: value3
};
myObject.key1.subKey1; // returns value1


ONE IMPORTANT THING TO REMEMBER IS THAT OBJECTS ARE MUTABLE, MEANING THAT EVEN IF AN OBJECT IS DECLARED USING const,
ITS PROPERTIES CAN STILL BE MODIFIED, ADDED, OR DELETED.

Objects are passed by reference, meaning that when you assign an object to a new variable, both variables point to the same object in memory.
So, changes made to the object through one variable will be reflected in the other variable as well.
Eg. const obj1 = { key1: value1 };
const obj2 = obj1;
obj2.key1 = newValue1;
console.log(obj1.key1); // Out: newValue1

We can iterate over objects using for...in loop or Object.keys(), Object.values(), Object.entries() methods.
Eg. const myObject = {
    key1: value1,
    key2: value2,
    key3: value3
};

For...in syntax
for (const key in myObject) {
    console.log(key + ": " + myObject[key]);
}

Object.keys(myObject).forEach((key) => {
    console.log(key + ": " + myObject[key]);
}

Object.entries(myObject).forEach(([key, value]) => {
    console.log(key + ": " + value);
}

---> this. KEYWORD
The this keyword refers to the object that is executing the current function.
The this keyword references the calling object, which provides access to the calling object’s properties and methods.
Eg. const myObject = {
    key1: value1,
    method1: function() {
        console.log(this.key1); // Out: value1, if only log(key1) then it gives error as key1 is not defined in that scope
    }
};
myObject.method1();

In arrow functions, the 'this' keyword does not refer to the calling object, it basically means
'this'(in arrow function) gets value from the global scope where the arrow function is defined.

Eg. const myObject = {
    key1: value1,
    method1: () => {
        console.log(this.key1); // Out: undefined
    }
};
myObject.method1();


---> privacy in objects
To create private properties in objects, we can use closures or the new # syntax for private fields.
Eg. function createPerson(name, age) {
    let _name = name; // private property
    let _age = age; // private property

    return {
        getName: function() {
            return _name;
        },
        getAge: function() {
            return _age;
        }
    };
}
const person = createPerson('Rohan', 25);
console.log(person.getName()); // Out: Rohan
console.log(person.getAge()); // Out: 25
console.log(person._name); // Out: undefined


---> getters
Getters and setters are special methods that allow you to get and set the values of object properties.
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number'  ){
      return `My current energy level is ${this._energyLevel}` ;
    } else{
      return 'System malfunction: cannot retrieve energy level' ;
    }
  }
};

console.log(robot.energyLevel); // Output: My current energy level is 100
hence getters are used to access the properties of an object, and 
if we try to access the property directly it gives undefined as it is private property.
so getters bascally return to us the value of private properties.


---> setters
Setters are used to set the values of private properties in an object.
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    set energyLevel(newLevel){
      if(typeof newLevel === 'number' && newLevel >= 0 && newLevel <= 100){
        this._energyLevel = newLevel ;
        } else{
            console.log('Please provide a valid energy level between 0 and 100.' );     
        }
    }   
};

robot.energyLevel = 85;
console.log(robot._energyLevel); // Output: 85

---> Factory functions
Factory functions are functions that return objects.
They are used to create multiple instances of similar objects.
Eg. const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep(){
      console.log('Beep Boop');
    }
  }
};
const tinCan = robotFactory('P-500', true);
tinCan.beep(); // Out: Beep Boop
Thus factory functions help to create multiple objects with similar properties and methods.
and we can create as many objects as we want using factory functions.

Property value shorthand - if the property name and variable name are the same, we can use shorthand syntax.
Eg. const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep(){
        console.log('Beep Boop');
    }
  }
}   
const tinCan = robotFactory('P-500', true);
tinCan.beep(); // Out: Beep Boop
// the output will be same as above example.

---> Destructured assignment
Destructured assignment allows us to extract properties from objects and assign them to variables.
Eg. const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        }
};
const { functionality } = robot;
functionality.beep(); // Out: Beep Boop
functionality.fireLaser(); // Out: Pew Pew
Thus destructured assignment helps to extract properties from objects and assign them to variables in a concise way.
This basicallly helps to avoid writing long code like...
const functionality = robot.functionality;
functionality.beep();
functionality.fireLaser();


---> Built-in Object Methods
we can use Object.keys(), Object.values(), Object.entries() to get the keys, values, entries of an object.
Eg. const myObject = {
    key1: value1,
    key2: value2,
    key3: value3
};
Object.keys(myObject); // returns ['key1', 'key2', 'key3']
Object.values(myObject); // returns [value1, value2, value3]
Object.entries(myObject); // returns [['key1', value1], ['key2', value2], ['key3', value3]]

Object.assign() - takes the properties form "source" object and pastes it into "target" object.
Eg. const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);

Review...
The object that a method belongs to is called the calling object.
The 
this
Preview: Docs Loading link description
 keyword refers to the calling object and can be used to access properties of the calling object.
Methods
Preview: Docs Methods are object properties that contain functions.
 do not automatically have access to other internal properties of the calling object.
The value of this depends on where the this is being accessed from.
We cannot use 
arrow functions
Preview: Docs Arrow function expressions were introduced in ES6. These expressions are a clean and concise alternative to the traditional function syntax.
 as methods if we want to access other internal properties.
JavaScript 
objects
Preview: Docs A data type for organizing a set of custom properties and behaviors.
 do not have built-in privacy — however, there are conventions to follow to notify other developers about the intent of the code.
The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
Setter and getter methods allow for more detailed ways of accessing and assigning properties.
Factory 
functions
Preview: Docs Loading link description
 allow us to create object instances quickly and repeatedly.
There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
As with any concept, it is a good skill to learn how to use the documentation with objects!

*/