/**
 * 52. N-Queens II
 * Hard
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
 * Given an integer n, return the number of distinct solutions to the n-queens puzzle.
 *  
 * Example 1:
 *      Input: n = 4
 *      Output: 2
 *      Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
 * Example 2:
 *      Input: n = 1
 *      Output: 1
 * 
 */

function totalNQueens(n: number): number {
    const x = Array.from({ length: n }, () => Array(n).fill(0))
    let res = 0

    function check(board: number[][], row: number, col: number) {
        for (const r of board) {
            if (r[col] === 1) return false
        }

        // top-left
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 1) return false
        }

        // top-right
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 1) return false
        }

        // bottom-left
        for (let i = row + 1, j = col - 1; i < n && j >= 0; i++, j--) {
            if (board[i][j] === 1) return false
        }

        // bottom-right
        for (let i = row + 1, j = col + 1; i < n && j < n; i++, j++) {
            if (board[i][j] === 1) return false
        }

        return true
    }

    function back(cur: number, board: number[][], i: number, j: number) {
        if (cur === n) return res++
        else if (i >= n) return
        else if (j >= n) back(cur, board, i + 1, 0)
        else {

            if (check(board, i, j)) {
                board[i][j] = 1
                back(cur + 1, board, i + 1, 0)
            }
            board[i][j] = 0
            back(cur, board, i, j + 1)
        }
    }

    back(0, x, 0, 0)

    return res
};


function totalNQueens2(n: number): number {
    const x: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false))

    function check(board: boolean[][], row: number, col: number) {
        for (let i = 0; i <= row; i++) {
            if (board[i][col]) return false;
            if (row - i >= 0 && col - i >= 0 && board[row - i][col - i]) return false;
            if (row - i >= 0 && col + i < n && board[row - i][col + i]) return false;
        }

        return true
    }

    function back(board: boolean[][], i: number) {
        if (i === n) return 1;
        let count = 0;
        for (let col = 0; col < n; col++)
            if (check(board, i, col)) {
                board[i][col] = true;
                count += back(board, i + 1);
                board[i][col] = false;
            }
        return count;
    }

    return back(x, 0)
};

const n = 9

// console.log(totalNQueens(n));
// console.log(totalNQueens2(n));

Deno.bench("#1", () => {
    totalNQueens(n)
})

Deno.bench("#2", () => {
    totalNQueens2(n)
})