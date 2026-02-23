/**
 * 
 * 137. Single Number II
 * Medium
 * Given an integer array nums where every element appears three times except for one, 
 * which appears exactly once. Find the single element and return it.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *  
 * Example 1:
 *      Input: nums = [2,2,3,2]
 *      Output: 3
 * Example 2:
 *      Input: nums = [0,1,0,1,0,1,99]
 *      Output: 99

 * 
 */

function singleNumber(nums: number[]): number {

    let x1 = 0, x2 = 0, mask = 0

    for (const n of nums) {
        x2 ^= x1 & n
        x1 ^= n
        mask = ~(x1 & x2)
        x2 &= mask
        x1 &= mask
    }

    return x1
};




function singleNumber22(nums: number[]): number {

    let ones = 0, twos = 0


    for (const num of nums) {
        ones ^= (num & ~twos);
        twos ^= (num & ~ones);
    }

    return ones
};

const nums = [2, 2, 2, 7, 7, 7, 4]


console.log(singleNumber22(nums));
