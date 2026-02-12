/**
 * 322. Coin Change
 * Medium
 * You are given an integer array coins representing coins of different denominations 
 * and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount. 
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 *  
 * Example 1:
 *      Input: coins = [1,2,5], amount = 11
 *      Output: 3
 *      Explanation: 11 = 5 + 5 + 1
 * Example 2:
 *      Input: coins = [2], amount = 3
 *      Output: -1
 * Example 3:
 *      Input: coins = [1], amount = 0
 *      Output: 0
 * 
 */



function coinChangeRecursive(coins: number[], amount: number): number {

    function check(coins: number[], amount: number, n: number = 0): number {
        if (amount === 0) return n
        if (amount < 0) return Number.POSITIVE_INFINITY

        let res = Number.MAX_SAFE_INTEGER;
        for (const coin of coins) {
            res = Math.min(check(coins, amount - coin, n + 1), res);
        };

        return res !== Number.POSITIVE_INFINITY ? res : - 1

    }

    return check(coins, amount, 0)
};


function coinChangeTopDown(coins: number[], amount: number): number {
    const memo = new Array(amount).fill(null);

    function check(coins: number[], amount: number,): number {
        if (amount === 0) return 0
        if (amount < 0) return Number.MAX_SAFE_INTEGER

        let res = Number.MAX_SAFE_INTEGER;
        if (memo[amount]) return memo[amount]
        for (const coin of coins) {
            res = Math.min(check(coins, amount - coin) + 1, res);
        };

        memo[amount] = res

        return res

    }

    const res = check(coins, amount)

    return res !== Number.MAX_SAFE_INTEGER ? res : - 1
};

function coinChangeBottomUp(coins: number[], amount: number): number {
    const memo = new Array(amount).fill(null);
    memo[0] = 0

    for (let cur = 1; cur <= amount; cur++) {
        memo[cur] = Number.MAX_SAFE_INTEGER

        for (const coin of coins) {
            if (cur - coin >= 0) {
                memo[cur] = Math.min(memo[cur], memo[cur - coin] + 1)
            }
        }

    }

    return memo[amount] === Number.MAX_SAFE_INTEGER ? -1 : memo[amount]
}


const coins = [1, 2, 5], amount = 100

// console.log(coinChangeTopDown(coins, amount));

Deno.bench('Top Down memo', () => {
    coinChangeTopDown(coins, amount)
})

// Deno.bench('recursive', () => {
//     coinChangeRecursive(coins, amount)
// })

Deno.bench('Bottom Up', () => {
    coinChangeBottomUp(coins, amount)
})