// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

//sliding window 
// >= target 
// min_length 

function minLength(array,target){
     let min_length = Infinity;
     let current_sum = 0;
     let start = 0; 
     for(let i = 0; i < array.length; i++){
          current_sum += array[i];
          while(current_sum >= target){
               min_length  = Math.min(min_length, i - start + 1);
               current_sum -= array[start];
               start++;
          }
     }

     if (min_length === Infinity) {
          return 0;
        } 
     return min_length;

}

console.log(minLength([2,3,1,2,4,3],7));