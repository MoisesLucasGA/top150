/**
 * 219. Contains Duplicate II
Easy
Topics
premium lock iconCompanies

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/


function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        const pos = map.get(nums[i]) ?? Number.POSITIVE_INFINITY
        if (Math.abs(i - pos) <= k) {
            return true
        }
        map.set(nums[i], i)
    }

    return false
};

const nums = [1, 2, 3, 1], k = 3

console.log(containsNearbyDuplicate(nums, k));
