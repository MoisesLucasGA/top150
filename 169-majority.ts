/**
 * 169. Majority Element
Easy
Topics
premium lock iconCompanies

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 */


function majorityElement(nums: number[]): number {
    const hash = new Map<number, number>()

    for (const key of nums) {
        const val = hash.get(key) ?? 0

        hash.set(key, val + 1)
    }

    for (const [key, val] of hash) {
        if (val >= (nums.length / 2)) return key
    }

    return -1
};

const nums = [2,2,1,1,1,1,1,2,2]

console.log(majorityElement(nums));
