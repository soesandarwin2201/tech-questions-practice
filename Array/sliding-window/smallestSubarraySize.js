// find the smallest subarray size 
// [4,2,1,7,8,1,2,8,1,0]

function smallestSubarray(arr,targetSum){
     let min_size = Infinity; // size
     let current_sum = 0; // element
     let start_subarray = 0;
     for(let i = 0; i < arr.length; i++){
          current_sum += arr[i];
          if(current_sum >= targetSum){
               min_size = Math.min(min_size, i - start_subarray + 1);
               current_sum -= arr[start_subarray];
               start_subarray++;

          }
     }
     return min_size;

}

console.log(smallestSubarray([4,2,1,7,8,1,2,8,1,0],8))