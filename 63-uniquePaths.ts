/**
 * 63. Unique Paths II
 * Medium
 * You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
 * An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.
 * Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 * The testcases are generated so that the answer will be less than or equal to 2 * 109.
 *  
 * Example 1:
 *      Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 *      Output: 2
 *      Explanation: There is one obstacle in the middle of the 3x3 grid above.
 *      There are two ways to reach the bottom-right corner:
 *      1. Right -> Right -> Down -> Down
 *      2. Down -> Down -> Right -> Right
 * Example 2:
 *      Input: obstacleGrid = [[0,1],[0,0]]
 *      Output: 1
 *  
 * Constraints:
 *     m == obstacleGrid.length
 *     n == obstacleGrid[i].length
 *     1 <= m, n <= 100
 *     obstacleGrid[i][j] is 0 or 1.
 * 
 */


function uniquePathsWithObstaclesBrute(obstacleGrid: number[][]): number {
    const n = obstacleGrid.length - 1;
    const m = obstacleGrid[0].length - 1;

    function dp(i: number, j: number): number {
        if (i > n || j > m || obstacleGrid[i][j] === 1) {
            return 0;
        }

        if (i === n && j === m) {
            return 1;
        }

        return dp(i + 1, j) + dp(i, j + 1);
    }

    return dp(0, 0);
};

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const n = obstacleGrid.length;
    const m = obstacleGrid[0].length;

    if (obstacleGrid[0][0] === 1 || obstacleGrid[n - 1][m - 1] === 1) {
        return 0;
    }

    const dp: number[][] = Array.from({ length: n }, () =>
        Array.from({ length: m }, () => 0),
    );
    dp[0][0] = 1;

    for (let i = 1; i < n; i++) {
        if (obstacleGrid[i][0] == 1) dp[i][0] = 0;
        else dp[i][0] = dp[i - 1][0];
    }

    for (let j = 1; j < m; j++) {
        if (obstacleGrid[0][j] == 1) dp[0][j] = 0;
        else dp[0][j] = dp[0][j - 1];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (obstacleGrid[i][j] == 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }

    return dp[n - 1][m - 1];
};

const obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0]]

// console.log(uniquePathsWithObstacles(obstacleGrid));

Deno.bench("brute", () => {
    uniquePathsWithObstaclesBrute(obstacleGrid)
})
Deno.bench("DP", () => {
    uniquePathsWithObstacles(obstacleGrid)
})
