/**
 * 26. Remove Duplicates from Sorted Array
Easy
Topics
premium lock iconCompanies
Hint

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
 * 
 */


function removeDuplicates(nums: number[]): number {
    let i = 0, j = 0

    while(j < nums.length){
        if (nums[j] !== nums[j-1]) {
            nums[i] = nums[j]
            i++
        }
        j++
    }

    console.log(nums);
    console.log(i);
    

  return i
};

const nums = [1,1,2]

removeDuplicates(nums)