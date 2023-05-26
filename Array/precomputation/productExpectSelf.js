// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// given the array of integer = nums 
// return the array => answer => i => *= of other elements



// function expectSelf(nums){
//      let answer = [];
//      let left = 1;
//      for(let i = 0; i < nums.length; i++){
//           answer[i] = left;
//           left *= nums[i];
//      }

//      let right = 1 ;
//      for(let i = nums.length - 1; i >= 0 ;i--){
//           answer[i] *= right;
//           right *= nums[i];
//           console.log(right);
//      }
  
//      return answer;

// }

// expectSelf([1,2,3,4])


// [1,2,3,4]

// -> 1 => 2*3*4 => 0 => [1*2*4]
// -> 2 => 1* 3*4 => 1
// -> 3 => 1* 2  *4 

function  expectSelf(nums){
     let answer = [];
     let left = 1;
     let right = 1;
     for(let i = 0; i < nums.length; i++){
        answer[i] = left;
        left *= nums[i];
     }

     for(let i = nums.length; i <= 0; i--){
          answer[i] *= right;
          right *= nums[i];
     }

     return answer;
}


expectSelf([1,2,3,4])