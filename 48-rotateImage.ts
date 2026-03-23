/**
 * 
 * 48. Rotate Image
 * Medium
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 *  
 * Example 1:
 *      Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 *      Output: [[7,4,1],[8,5,2],[9,6,3]]

 */

function rotate(matrix: number[][]): void {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rotate(matrix)
console.log(matrix);
