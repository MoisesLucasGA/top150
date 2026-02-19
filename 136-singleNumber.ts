/**
 * 136. Single Number
 * Easy
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *  
 * Example 1:
 *      Input: nums = [2,2,1]
 *      Output: 1
 * Example 2:
 *      Input: nums = [4,1,2,1,2]
 *      Output: 4
 * Example 3:
 *      Input: nums = [1]
 *      Output: 1
 * 
 */


function singleNumberHash(nums: number[]): number {
    const hash = new Set<number>()

    for (const n of nums) {
        if (hash.has(n)) hash.delete(n)
        else hash.add(n)
    }

    return Array.from(hash)[0]
};

function singleNumber(nums: number[]): number {

    let res = 0

    for (const n of nums) {
        res ^= n
    }

    return res
};

const nums = [4, 1, 2, 1, 2]


console.log(singleNumber(nums));
