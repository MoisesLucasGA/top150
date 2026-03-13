/**
 * 35. Search Insert Position
 * Easy
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 *  
 * Example 1:
 *      Input: nums = [1,3,5,6], target = 5
 *      Output: 2
 * Example 2:
 *      Input: nums = [1,3,5,6], target = 2
 *      Output: 1
 * Example 3:
 *      Input: nums = [1,3,5,6], target = 7
 *      Output: 4
 *  
 * Constraints:
 *     1 <= nums.length <= 104
 *     -104 <= nums[i] <= 104
 *     nums contains distinct values sorted in ascending order.
 *     -104 <= target <= 104
 */

function searchInsert(nums: number[], target: number): number {

    let left = 0
    let right = nums.length - 1
    let middle = 0

    while (left < right) {
        middle = Math.floor(left + (right - left) / 2);

        console.log(middle);


        if (nums[middle] === target) {
            return middle
        }

        else if (nums[middle] < target) {
            left = middle + 1
        }

        else if (nums[middle] > target) {
            right = middle
        }
    }

    return nums[left] < target ? left + 1 : left;
};

const nums = [1, 4, 5, 7, 10, 12, 15, 16, 17], target = 20

console.log(searchInsert(nums, target));
