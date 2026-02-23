/*
const matrixBoard = [ ["*", 1, 0],[0, 1, 1], [0,0,1]];
* 1 0
0 1 1
0 0 1

*/

let row = 0;
let col = 0;
let hasLost = false;
const matrixBoard = [ ["*", 1, 0],[0, 1, 1], [0,0,1]];

const playGame = (matrixBoard, userInput) => { 
        let currentPosition = [];

        if(userInput === 'r'){
            col++;
            if(matrixBoard[row][col] === 0){
                console.log('You Loose');
                hasLost = true;

            }
            console.log(`You are at ${matrixBoard[row][col]} position`);
            currentPosition = [row, col];
        }
        
        if(userInput === 'd'){
            row++;
            if(matrixBoard[row][col] === 0){
                console.log('You Loose');
                hasLost = true;
            }
            console.log(`You are at ${matrixBoard[row][col]} position`);
            currentPosition = [row, col];
        }

        if(userInput === 'u'){
            row++;
            if(matrixBoard[row][col] === 0){
                console.log('You Loose');
                hasLost = true;
            }
            console.log(`You are at ${matrixBoard[row][col]} position`);
            currentPosition = [row, col];
        }

        if(userInput === 'l'){
            row++;
            if(matrixBoard[row][col] === 0){
                console.log('You Loose');
                hasLost = true;
            }
            console.log(`You are at ${matrixBoard[row][col]} position`);
            currentPosition = [row, col];
        }

        if(hasLost === true){
            row = 0;
            col = 0;
            hasLost = false;
        }

        if([matrixBoard.length][matrixBoard.length] === matrixBoard[row][col]){
            console.log('You Won !!');
        }

    return currentPosition;
}

console.log(playGame(matrixBoard, 'r'));



// const newPromise = () => {
//     return new Promise(
//         (resolve, reject) => {
//             const duration = Math.round() * 1000;
//             const products = ["product1", "product2"];

//             setTimeout(() => {

//             if(products.length !== 0)  return resolve(products);

//             reject({mesage : "oops! something failed !!"}); 

//             }, duration)
          
//         }
//     )
// }


// newPromise()
//     .then(
//     (products)=>{
//         console.log([products]);
//     }
//     ).catch( (error) =>{
//         console.log(error.message)
//     })
    