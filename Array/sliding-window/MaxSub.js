// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

function maxSub(nums) {
     let max_sum = nums[0];
     let current_sum = 0;
 
     for (let i = 0; i < nums.length; i++) {
         current_sum = Math.max(nums[i], current_sum + nums[i]);
         max_sum = Math.max(max_sum, current_sum);
     }
 
     return max_sum;
 }
 
 maxSub([-2, 1, -3, 4, -1, 2, 1, -5, 4]); 
