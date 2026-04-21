/**
 * 120. Triangle
 * Medium
 * Given a triangle array, return the minimum path sum from top to bottom.
 * For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
 *  
 * Example 1:
 *      Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
 *      Output: 11
 *      Explanation: The triangle looks like:
 *         2
 *        3 4
 *       6 5 7
 *      4 1 8 3
 *      The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
 * Example 2:
 *      Input: triangle = [[-10]]
 *      Output: -10
 *  
 * Constraints:
 *     1 <= triangle.length <= 200
 *     triangle[0].length == 1
 *     triangle[i].length == triangle[i - 1].length + 1
 *     -104 <= triangle[i][j] <= 104
 *  
 * Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?
 */


function minimumTotal(triangle: number[][]): number {
    const dp: number[][] = triangle;

    let n = triangle.length - 2;

    while (n >= 0) {
        for (let i = 0; i < triangle[n].length; i++) {
            dp[n][i] =
                triangle[n][i] +
                Math.min(
                    dp[n + 1][i] ?? Number.MAX_SAFE_INTEGER,
                    dp[n + 1][i + 1] ?? Number.MAX_SAFE_INTEGER,
                );
        }

        n--;
    }

    return dp[0][0];
};

function minimumTotal2(triangle: number[][]): number {

    let n = triangle.length - 2;

    while (n >= 0) {
        for (let i = 0; i < triangle[n].length; i++) {
            triangle[n][i] =
                triangle[n][i] +
                Math.min(
                    triangle[n + 1][i] ?? Number.MAX_SAFE_INTEGER,
                    triangle[n + 1][i + 1] ?? Number.MAX_SAFE_INTEGER,
                );
        }

        n--;
    }

    return triangle[0][0];
};

const triangle = [[3], [3, 4], [6, 5, 7], [4, 1, 8, 3]]

console.log(minimumTotal2(triangle));
