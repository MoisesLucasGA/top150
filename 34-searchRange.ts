/**
 * 34. Find First and Last Position of Element in Sorted Array
 * Medium
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 *  
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 * 
 */


function searchRange(nums: number[], target: number): number[] {
    const n = nums.length - 1
    let l = 0
    let r = n

    let start = -1
    let end = -1

    while (l <= r) {
        const mid = l + ((r - l) >> 1)

        if (nums[mid] === target) {
            start = mid
            end = mid

            let i = mid + 1
            while (nums[i] === target && (i) <= n) {
                end = i
                i++
            }

            i = mid - 1

            while (nums[i] === target && i >= 0) {
                start = i
                i--
            }

            break

        }

        if (nums[mid] >= target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return [start, end]
};


const nums = [5, 7, 7, 8, 8, 8, 8, 8, 8, 8, 10], target = 8

console.log(searchRange(nums, target));
