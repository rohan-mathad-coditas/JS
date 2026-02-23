    // function    one = () => console.log("one");
    // function    two = () => console.log("two");
    // function    three = () => console.log("three");


// function add (n1, n2) {return n1 + n2};
// function sub (n1, n2) {return n1 - n2};
// function multiply (n1, n2, n3) {return n1 * n2 * n3}


// const callFun = (n1, n2, n3, callback) => {
//     return () =>{
//         console.log(`Operating on ${n1} & ${n2}`)
//         console.log(`result is ${callback(n1,n2, n3)}`)
//     }
// }

// const n1 = 2, n2= 3, n3 =6;
// add = callFun(n1 , n2, add);
// add(n1,n2);
// sub(n2, n1);

// multiply(n1, n2, n3);



//
// const callFun = (a) => {
//     return (b) => {
//         return(c) => {
//             return a * b * c;
//         }
//     }
// }

// callFun(3)(4)(5);
// function one () {console.log("one")}

//-------------------------------------------------------------
// const printPattern = (callback) => {
//     return () => {
//         return () => {

//         }
        
//     }
// }

// one = printPattern(one);
// one();
// CONFIGURABLE DECORATOR 
 
// function two() {
//     console.log("TWO");
// }

// const logger = (noOfStars) => {
//     return (callBackFunc) => {
//         return () => {
//             console.log("*".repeat(noOfStars));
//             callBackFunc();
//             console.log("*".repeat(noOfStars));
//         }
//     }
// }

// two = logger(5)(two);

// two();

