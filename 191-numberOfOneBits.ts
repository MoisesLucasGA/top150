/**
 * 191. Number of 1 Bits
 * Easy
 * Given a positive integer n, write a function that returns the number of in its binary representation (also known as the Hamming weight).
 *  
 * Example 1:
 *      Input: n = 11
 *      Output: 3
 *      Explanation:
 *      The input binary string 1011 has a total of three set bits.
 * Example 2:
 *      Input: n = 128
 *      Output: 1
 *      Explanation:
 *      The input binary string 10000000 has a total of one set bit.
 */

function hammingWeight(n: number): number {
    let sum = 0

    while (n > 0) {
        sum += n & 1
        n >>= 1
    }

    return sum
};

const n = 11

console.log(hammingWeight(n));
