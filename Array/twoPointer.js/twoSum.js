// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums,target){
     for(let i = 0; i < nums.length; i++){
          for(let j = i + 1; j < nums.length; j++){
               if(nums[i] + nums[j] === target){
                    return [i,j];
               }
          }
     }
}

twoSum([3,3],6)

// [2,7,11,15] 
// return index of two number => target 
// if not we will return 0 / -1

// This is the two pointer version
// function twoSum(nums,target){
//      let i = 0;
//      let j = nums.length - 1; 

//      while( i < j) {
//           if(nums[i] + nums[j] === target) {
//                return [i,j];
//           }
//           else if(nums[i] + nums[j] < target){
//                i++;
//           }
//           else {
//                j--;
//           }
//      }

// }

// console.log(twoSum([3,2,4],6));

// [2,3,1,2,4,3]




// function test(nums,target){
//      let i = 0;
//      let j = i + 1;
//      let min_sum = 0;
     
//      while(i < j || i == j){
//           let sum = nums[i] + nums[j];
//           if(sum >= target){
//                min_sum = Math.min(min_sum, j - i + 1);
//                i++;
//                j++;
//           }
//           else if(sum < target){
//              i++;
//           }
//      }
// }

// test([2,3,1,2,4,3],7);
