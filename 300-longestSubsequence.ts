/**
 * 300. Longest Increasing Subsequence
 * Medium
 * Given an integer array nums, return the length of the longest strictly increasing .
 *  
 * Example 1:
 *      Input: nums = [10,9,2,5,3,7,101,18]
 *      Output: 4
 *      Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 * Example 2:
 *      Input: nums = [0,1,0,3,2,3]
 *      Output: 4
 * Example 3:
 *      Input: nums = [7,7,7,7,7,7,7]
 *      Output: 1
 * 
 */

function lengthOfLIS(nums: number[]): number {
    const memo: number[] = Array(nums.length).fill(1)

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && memo[i] < memo[j] + 1) {
                console.log(`i: ${nums[i]} > j: ${nums[j]}`);

                memo[i] = memo[j] + 1
                console.log(`memo: ${memo[i]}`);
            }
        }
    }

    return Math.max(...memo)
};


function lis(nums: number[]): number {
    const seq: number[] = []

    for (const n of nums) {
        if (seq.length === 0 || seq[seq.length - 1] < n) {
            seq.push(n)
        } else {
            const index = seq.findIndex((x) => x >= n)
            seq[index] = n
        }

    }

    return seq.length
}


const nums = [0, 1, 0, 3, 2, 3]

console.log(lis(nums));
