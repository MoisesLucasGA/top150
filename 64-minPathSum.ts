/**
 * 64. Minimum Path Sum
 * Medium
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 *  
 * Example 1:
 *      Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
 *      Output: 7
 *      Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
 * Example 2:
 *      Input: grid = [[1,2,3],[4,5,6]]
 *      Output: 12
 *  
 * Constraints:
 *     m == grid.length
 *     n == grid[i].length
 *     1 <= m, n <= 200
 *     0 <= grid[i][j] <= 200
 * 
 */

function minPathSum(grid: number[][]): number {
    const m = grid.length - 1;
    const n = grid[0].length - 1;
    const dp: number[][] = Array.from({ length: m + 1 }, () =>
        Array.from({ length: n + 1 }, () => -1),
    );

    function check(i: number, j: number) {
        if (i === 0 && j === 0) {
            return grid[0][0];
        }

        if (i < 0 || i > m || j < 0 || j > n) {
            return Number.MAX_SAFE_INTEGER;
        }

        if (dp[i][j] !== -1) {
            return dp[i][j];
        }

        dp[i][j] = grid[i][j] + Math.min(check(i - 1, j), check(i, j - 1));

        return dp[i][j];
    }

    return check(m, n);
};

const grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]

console.log(minPathSum(grid));
