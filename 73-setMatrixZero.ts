/**
 * 73. Set Matrix Zeroes
 * Medium
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
 * Example 1:
 *      Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
 *      Output: [[1,0,1],[0,0,0],[1,0,1]]
 * 
 */

function setZeroes(matrix: number[][]): void {
    const rows = matrix.length
    const cols = matrix[0].length

    let firstRow = false, firstCol = false;

    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] == 0) {
            firstRow = true;
        }
    }
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] == 0) {
            firstCol = true;
        }
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (firstRow) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
    if (firstCol) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }
};

const matrix = [[0, 1, 1], [1, 1, 1], [1, 1, 1]]

setZeroes(matrix)

