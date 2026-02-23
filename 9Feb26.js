/*
requiredpattern
input 4

7,2,3,10,
12,15,16,5
11,14,13,6
4,9,8,1
 
4,3,3,2,2,1,1,1
right 4-2
bottom 3-1
left 3-1
up 2- 1

*/



// const generatePattern = (number) =>{
//     let left = 0, right = 0, top = 0, bottom = 0;
//     let isRight = true, isBottom = false;
//     const pattern = [];
//     const newRow = [];

//     for(let index = 1; index <= number * number; index++){
//         if(isRight) {
//             right++;
//             if(right <= index) {
//                 newRow.push(right);
//                 continue;
//             }
//             pattern.push(newRow);
//             isRight = false;
//             isBottom = true;
//         }
//         if(isBottom){
//             bottom = index;
//             if(bottom < ){
//                 pattern.push([index]);
//             }
//         }
        
        
//     }
// }




// const employeeData = [
//     {
//         name:'',
//        
//     }
// ]

// const employeeName = (employeeData, callback) => {
//     const employeeNameArr = employeeData.map(employeeData.name);
// }

// const employeeAge = (employeeData) => {
//     const employeeAge = employeeData.filter(employeeData.age<32);
// }

//------------------------------------------------

// car 10% home personal

// const simpleIntrest = (p,n,r) => {
//     const simpleIntrest = p * n * r / 100;
//     return () => simpleIntrest;
// }

const factoryLoan = rateOfIntrest => {
    return ( newRoi)=> {
        return (p, n) => {
        return p * n * rateOfIntrest / 100;
        }
    }
}//dds

const homeLoan = factoryLoan(10);
homeLoan(100000, 5);