// const doAnything = givenArray => (num => {
//     num * 5;
// })

// const doAnything = givenArray => (element => {
//     Number(element) ? element * 5 :  
// })

// const doTask = (givenArray) => {
//     consrr= [];

//     for(let index = 0; index < givenArray.length ; index++){
//         givenArray.push(givenArray %2)
//     }

// }
// name,color, price
// price < 20000

/*
const arayOfPlayingToys =  [ 
    ["toy car", "red", 23000],
    ["toy truck", "blue", 23000],
    ["toy bus", "pink", 23000]
]

const filterByPrice = (arrayOfPlayingToys, condition) =>{
    const filteredArray = [];
    for(let index = 0; index < arrayOfPlayingToys.length ; index++){
        if(condition()){
            filteredArray.push(arrayOfPlayingToys[0].push())
        }
    }
}
*/

// const products =  [ 
//     {
//         name: "laptop", 
//         color: "white",
//         price: 30000
//     },
//     {
//         name: "headphone", 
//         color: "red",
//         price: 25000
//     },
//     {
//         name: "keyboard", 
//         color: "pink",
//         price: 35000
//     },
//     {
//         name: "TV", 
//         color: "blue",
//         price: 40000
//     },
//     {
//         name: "phone", 
//         color: "white",
//         price: 4000
//     }
// ]


// const filterArray = (inputArray, condition) => {
//     const resultArr = [];

//     for(let index = 0; index < inputArray.length ; index++){
//         const currentElement = inputArray[index];
//         if(condition(currentElement)){
//             resultArr.push(currentElement);
//         }
//     }

//     return resultArr;
// }

//filterArray(products, product => product.price > 20000 && product.color === "white");




// const reduceElements = (inputArray, condition) => {

//     const resultArr = inputArray.reduce( (accumulator, sum) => {
//         return accumulator + sum
//     } )

//     return resultArr;
// }

// const numbers = [1,7,8,9];
// reduceElements(numbers)

// const letters = ["A", "B", "C"]
// reduceElements(letters)

// any array element that returns a callback, polyphils
// array. -> map, filter, 


// map 
    const mapElements = (inputArray, callback) => {
    let resultArr = [];

    for (let index = 0; index < inputArray.length; index++) {
        const newElement = callback(inputArray[index]);
        resultArr.push(newItem);
    }

    return resultArr;
}
const numbers = [1, 2, 3, 4];
mapElements(numbers, num => num * 2); // [2,4,6,8]

// findIndex
const findIndex = (inputArray, callbackfn, targetValue) => {
    for(let index = 0; index < inputArray.length; index++ ){
        if(callbackfn(inputArray[index])){
            return index;
        }
    }

    return -1;
}
const numberss = [1, 2, 3, 4];
findIndex(numberss, num => num === 3); //2


// Filter
const filterElements = (inputArray, condition) => {
    let resultArr = [];

    for (let index = 0; index < inputArray.length; index++) {
        if (condition(inputArray[index]) === true) {
            resultArr.push(inputArray[index]);
        }
    }

    return resultArr;
}
const ages = [12, 18, 25, 8];
filterElements(ages, age => age >= 18)

// forEach
const forEachElement = (inputArray, condition) => {
    for (let index = 0; index < inputArray.length; index++) {
        condition(inputArray[index]);
    }
}
const fruitArray = ["apple ", "Banana", " mango"];
forEachElement(fruitArray, item => console.log(item))
/*
apple
Banana
 mango
*/

// find
const findElement = (inputArray, condition) => {
    for (let index = 0; index < inputArray.length; index++) {
        if (condition(inputArray[index]) === true) {
            return true
        }
    }
    return undefined;
}

const idArray = [101, 102, 103];
findElement(idArray, id => id > 102) //103

// Reduce
const reduceElements = (inputArray, condition) => {
    const resultArr = inputArray.reduce( (accumulator, sum) => {
        return accumulator + sum
    } )
    return resultArr;
}
const numberArray = [1,7,8,9];
reduceElements(numberArray)//25

// findLast
const findLastElement = (inputArray, condition) => {
    for(let index = inputArray.length - 1; index >= 0; inputArray--){
        if(condition(inputArray[index])){
            return inputArray[index];
        }
    }
    return -1;
}
//const numberArray = [1,7,8,9];
console.log(findLastElement(numberArray, element => element > 8)); //9


// findLastIndex
const findLastElementIndex = (inputArray, condition) => {
    for(let index = inputArray.length - 1; index >= 0; inputArray--){
        if(condition(inputArray[index])){
            return index;
        }
    }
    return -1;
}
//const numberArray = [1,7,8,9];
console.log(findLastElementIndex(numberArray, element => element > 8)); //3