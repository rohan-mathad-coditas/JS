// function cerateMatrix(num){
//     let matrixArray = [];
//     let count = 1; 
//     let tempArr = [];
//     let switchIteration = true;

//     for(let i = 0; i < num * num; i++ ){
        
//         if(switchIteration === true) {
//             tempArr.push(count);
//         }

//         if(switchIteration === false){
            
//         }

//         if(count === num){
//             matrixArray.push(tempArr);
//             switchIteration = false;
//             tempArr = [];
//         }




        
        
        
//         count++;
//     }
// }

// cerateMatrix(4);

/*
[[],
[],
[],
[]]


1,2,3,4


[1,2,3,4], 
[12,13,14,5],
[11,16,15,6],
[10,9,8,7]


1,2,3,4,12,13,14,5,11,16,15,6,10,9,8,7

*/




function createPattern(number){
    const solutionArr = [];
    let basePattern = true;
    let count = 1;
    let tempArray = []

    while(basePattern === false){

        
        if(count >= number){
            tempArray.push(number--);
            if(tempArray.length === 5){
                break;
            }
        } else {
            tempArray.push(count);
        }
        count++;
    }
    // 1,2,3,2,1
    solutionArr.push(tempArray);
}


/**
 * 
 
 1,2,3,2,1
 2,3,2
 2,3,2
 3
 3
 3


1
222
333333
222
1

 */