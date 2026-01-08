/**
 * 88. Merge Sorted Array
Easy
Topics
premium lock iconCompanies
Hint

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

 */


function mergeTest(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = 0, j =0
    const res = []
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            res.push(nums1[i])
            i++
        }else {
            res.push(nums2[j])
            j++
        }

    }

    if (i === m) {
        res.push(...nums2.slice(j))
    }else res.push(...nums1.slice(i))

    console.log(res);
    
};


function mergeCopy(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = 0, j =0
    let actualSize = m
    while (i < actualSize && j < n) {
        if (nums2[j] < nums1[i]) {
            
            nums1 = [...nums1.slice(0, i), nums2[j], ...nums1.slice(i)] 

            j++
            i++
            actualSize++
            
        }else {
            i++
        }

    }

    if (i === actualSize) {
        nums1 = [...nums1.slice(0, actualSize), ...nums2.slice(j)]
    }


    nums1 = [...nums1.slice(0, m+n)]

    console.log(nums1);
    
};


function merge(nums1: number[], m: number, nums2: number[], n: number): void {
   let i = m-1, j = n-1, k = m+n - 1

   while (k >= 0) {
        if (nums1[i] >= nums2[j] || nums2[j] === undefined) {
            nums1[k] = nums1[i]
            i--
        }else if(nums1[i] < nums2[j] || nums1[i] === undefined){
            nums1[k] = nums2[j]
            j--
        }
        k--
   }

   console.log(nums1);
   
};


const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3


merge(nums1, m, nums2, n)
