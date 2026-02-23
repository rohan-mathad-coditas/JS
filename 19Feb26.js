// class playGame {
//   constructor(maze){
//     this.maze = maze
//   }
//   moveInMaze(input ,maze) {
//     let row = 0;
//     let col = 0;
//     const rowColBoundary = input.length -1;
//     let hasWon = true;
    
//     for (let index of input) {
//       if (index === 'r') {
//         if(++col > rowColBoundary){
//           col--;
//           console.log('You hit a boundary!!')
//           continue
//         } else if (this.maze[row][col] === 0) {
//           hasWon = false;
//           break;
//         }
//       }

//       if (index === 'l') {
//         if(--col < 0){
//           col++;
//           console.log('You hit a boundary!!')
//           continue
//         } else if (this.maze[row][col] === 0) {
//           break;
//         }
//       }

//       if (index === 'u') {
//         if(--row < 0){
//           row++;
//           console.log('You hit a boundary!!')
//           continue
//         } else if (this.maze[row][col] === 0) {
//           hasWon = false;
//           break;
//         }
//       }

//       if (index === 'd') {
//         if(++row < rowColBoundary){
//           row--;
//           console.log('You hit a boundary!!')
//           continue
//         } else if (this.maze[row][col] === 0) {
//           hasWon = false;
//           break;
//         }
        
//       }
//       console.log(`You are at position ${[row, col]}`)
//     }

//     return hasWon ? "You Won the game!!" : "You lost the game!!!";
//   }

  
// }

// const maze1 =
//   [
//     ['*', 0, 1, 1, 1],
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 0, 1],
//     [1, 1, 1, 0, 1]
//   ];

// let firstGame = new playGame(maze1);
// const arrOfInputs = ['d', 'd', 'd', 'd', 'r', 'r', 'u', 'l'];
// firstGame.moveInMaze(arrOfInputs);


class Game {
  constructor() {
    this.matrix = [
      ['*', 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 0, 1]
    ];

    this.directionObj = {
      'r': [0, 1],
      'l': [0, -1],
      'u': [-1, 0],
      'd': [1, 0]
    }

    this.currRow = 0;
    this.currCol = 0;
  }

  move(direction) {
    if (!this.directionObj.hasOwnProperty(direction)) {
      console.log("Please give valid input. [r,l,u,d]");
      return;
    }

    const move = this.directionObj[direction];

    if (this.currRow + move[0] > 4 || this.currRow + move[0] < 0 || this.currCol + move[1] > 4 || this.currCol + move[1] < 0 || this.matrix[this.currRow + move[0]][this.currCol + move[1]] === 0) {
      console.log("You cannot move in this direction");
      console.log(this.matrix); 
      return;
    }

    this.matrix[this.currRow][this.currCol] = 1;
    this.currRow = this.currRow + move[0];
    this.currCol = this.currCol + move[1];
    this.matrix[this.currRow][this.currCol] = '*'; 


    if (this.currRow === 4 && this.currCol === 4) {
      console.log("You Won Congratulations");
      return;
    }

    console.log(this.matrix);
  }

}



