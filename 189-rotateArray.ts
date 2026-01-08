/**
 * 189. Rotate Array
Medium
Topics
premium lock iconCompanies
Hint

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

 */


function rotateSlice(nums: number[], k: number): void {
    const n = nums.length
    nums = [...nums.slice(n-k), ...nums.slice(0,n-k)]

    console.log(nums);
    
};

function rotate(nums: number[], k: number): void {
    const kmod = (k % nums.length) 
    const n = nums.length - kmod

    const aux = nums.slice(0, n)

    for (let i = n, j=0; i < nums.length; i++,j++) {
        nums[j] = nums[i]
        
    }

    for (let i = kmod; i < nums.length; i++) {
        nums[i] = aux[i-kmod]
        
    }


    console.log(nums);
    
};

function rotateReversing(nums: number[], k: number): void {
    const n = nums.length
    k %= n 

    function reverse(left:number, right:number){
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++;
            right--; 
        }
    }

    reverse(0, n-1)
    
    reverse(0, k-1)
    
    reverse(k, n-1)
    console.log(nums);

    
};


const nums = [1,2,3,4,5], k = 2


// rotateSlice(nums, k)
// rotate(nums, k)
rotateReversing(nums, k)