// find the max sum of the subarry of the fixed size K
// [4,2,1,7,8,1,2,8,1,0]

function maxSum(array,k){
     let max_sum = -Infinity;
     let current_sum = 0;
     for(let i = 0; i < array.length; i++){
          current_sum += array[i];
          if( i >= k - 1){
               max_sum = Math.max(max_sum, current_sum);
               current_sum -= array[i - (k - 1)];
          }
     }
     return max_sum;

}

console.log(maxSum([4,2,1,7,8,1,2,8,1,0],3));