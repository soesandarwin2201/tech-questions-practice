// Given a sorted array A (sorted in ascending order), having N integers, find if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.

// let array = [10, 20, 35, 50, 75, 80];


function twoPointer(array,target){
    let i = 0;
    let j = array.length - 1;
    while(i < j){

     if(array[i] + array[j] == target){
          return [array[i], array[j]];
     }
     else if( array[i] + array[j] > target){
          j--;
     }
     else {
          i++;
     }
     
    }
    return 0;

}

twoPointer([10, 20, 35, 50, 75, 80],70);

function test(array,target){
     for(let i = 0; i < array.length; i++){
          for(let j = array.length - 1; j >= 0; j--){
               if(array[i] + array[j] === target){
                    return [array[i],array[j]];
               }

          }
     }
}

test([10, 20, 35, 50, 75, 80],70);


