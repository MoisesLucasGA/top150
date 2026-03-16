/**
 * 
 * 74. Search a 2D Matrix
 * Medium
 * You are given an m x n integer matrix matrix with the following two properties:
 *     Each row is sorted in non-decreasing order.
 *     The first integer of each row is greater than the last integer of the previous row.
 * Given an integer target, return true if target is in matrix or false otherwise.
 * You must write a solution in O(log(m * n)) time complexity.
 *  
 * Example 1:
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * Output: true
 * 
 */

function searchMatrix(matrix: number[][], target: number): boolean {
    const n = matrix[0].length - 1
    let m = -1
    for (let i = 0; i < matrix.length; i++) {
        if (target <= matrix[i][n]) {
            m = i
            break
        }
    }

    if (m === -1) return false


    let left = 0
    let right = n

    while (left <= right) {
        const middle = Math.floor((right + left) / 2);

        if (matrix[m][middle] === target) return true

        if (target > matrix[m][middle]) {
            left++
        } else if (target < matrix[m][middle]) {
            right--
        }
    }

    return false

};

const matrix = [[1, 3, 5, 6], [10, 11, 16, 20], [23, 30, 34, 60]], target = 30

console.log(searchMatrix(matrix, target));
