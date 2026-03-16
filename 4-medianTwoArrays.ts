/**
 * 4. Median of Two Sorted Arrays
 * Hard
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 *  
 * Example 1:
 *      Input: nums1 = [1,3], nums2 = [2]
 *      Output: 2.00000
 *      Explanation: merged array = [1,2,3] and median is 2.
 * Example 2:
 *      Input: nums1 = [1,2], nums2 = [3,4]
 *      Output: 2.50000
 *      Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

 */


// Sort New Array Approach

function findMedianSortedArrays2(nums1: number[], nums2: number[]): number {

    const n = nums1.length + nums2.length
    let target = Math.floor(n / 2)

    let i = 0, j = 0

    const res: number[] = []

    while (target >= 0) {
        if ((nums1[i] ?? Number.MAX_SAFE_INTEGER) <= (nums2[j] ?? Number.MAX_SAFE_INTEGER)) {
            res.push(nums1[i])
            i++
        } else if ((nums1[i] ?? Number.MAX_SAFE_INTEGER) > (nums2[j] ?? Number.MAX_SAFE_INTEGER)) {
            res.push(nums2[j])
            j++
        }
        target--
    }

    if ((n & 1) === 0) {
        return (res[res.length - 1] + res[res.length - 2]) / 2
    } else return res[res.length - 1]

};

const nums1 = [1, 3], nums2: number[] = [3, 4]

console.log(findMedianSortedArrays2(nums1, nums2));