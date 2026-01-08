/**
 * 209. Minimum Size Subarray Sum
Medium
Topics
premium lock iconCompanies

Given an array of positive integers nums and a positive integer target, return the minimal length of a
whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 */


function minSubArrayLen(target: number, nums: number[]): number {
    let l = 0, sum = 0
    let size = Number.POSITIVE_INFINITY


    for (let r = 0; r < nums.length; r++) {
        sum += nums[r]   
        while (sum >= target) {
            size = Math.min(size, (r-l)+1)
            sum-= nums[l]
            l++
        }
    }
    
    return size === Number.POSITIVE_INFINITY ? 0 : size 
};


const target = 4, nums = [1,4,4]

console.log(minSubArrayLen(target, nums));
