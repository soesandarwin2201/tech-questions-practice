// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// "abcabcbb" // sliding window 
// dynamic

// longest_length
// start_of_the subarray
// current_char
// compare the current_char with the visited character
function longestSubString(s){
     let longest_length = 0;
     let start = 0;
     let visitedChars = new Set();
     let strArray = s.split('');
     for(let i = 0; i < strArray.length ; i++){
          let current_char = strArray[i];
          if(!visitedChars.has(current_char)){
               visitedChars.add(current_char);
               longest_length = Math.max(longest_length, i - start + 1); // for the longest substring
          }
          else{ // for the repeated string
             while (strArray[start] !== current_char) {
        visitedChars.delete(strArray[start]);
        start++;
      }
      start++; 
          }
     }
     return longest_length;
}

console.log(longestSubString("pwwkew"));