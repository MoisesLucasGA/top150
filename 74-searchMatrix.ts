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
