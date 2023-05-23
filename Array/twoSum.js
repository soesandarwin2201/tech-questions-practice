// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//question explain
// have the array = nums 
// target = 
// return the index of two numbers , total sum = target
// repeat the loop
//[2,7,11,15] , 9 // two pointer 2+ _ = 9 - 2 = 7 
// for loop 
// differce of the current element

function twoSum(nums,target){
     for(let i = 0; i < nums.length ; i++){
          let differentIndex = nums.indexOf(target - nums[i], i + 1); 
          if( differentIndex !== - 1) {
               return [differentIndex,i];
          }
     }
}

twoSum([2,7,11,15],9)