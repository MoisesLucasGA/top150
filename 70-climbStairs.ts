/**
 * 70. Climbing Stairs
 * Easy
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Example 1:
 *      Input: n = 2
 *      Output: 2
 * Explanation: There are two ways to climb to the top.
 *      1. 1 step + 1 step
 *      2. 2 steps
 * 
 */


function climbStairs(n: number): number {
    const hash = new Map<number, number>()

    function count(n:number):number {
        if (n === 0 || n === 1) return 1
        if (hash.has(n)) return hash.get(n)!

        hash.set(n, count(n-1) + count(n-2))

        return hash.get(n)!
    }

    return count(n)
};

console.log(climbStairs(55));
