/**
 * 45. Jump Game II
Medium
Topics
premium lock iconCompanies

You are given a 0-indexed array of integers nums of length n. You are initially positioned at index 0.

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at index i, you can jump to any index (i + j) where:

    0 <= j <= nums[i] and
    i + j < n

Return the minimum number of jumps to reach index n - 1. The test cases are generated such that you can reach index n - 1.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

*/


// function jump(nums: number[]): number {
//     let sum = 0
//     let jump = 0

//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] > sum && sum < nums.length-1-i) {
//           sum = nums[i]
//           jump++
//         }
//         sum--
//     }

//   return jump
// };


function jump(nums: number[]): number {
  if (nums.length === 1) {
    return 0
  }
  

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= nums.length - i - 1) {
        return 1 + jump(nums.slice(0,i+1))
      }
      
    }

  return 0
};


function jumpFor(nums: number[]): number {
  let jumps = 0
  let n = nums.length-1

  while (n > 0) {
    for (let i = 0; i <= n; i++) {
      if (nums[i] >= n - i) {
        jumps++
        n = i
        break
      }
      
    }
    
  }
  return jumps
};

const nums = [2,1,1,1,1,1,1,1,1,4,1,1]

console.log(jump(nums));
console.log(jumpFor(nums));
