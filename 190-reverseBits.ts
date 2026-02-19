/**
 * 190. Reverse Bits
 * Easy
 * Reverse bits of a given 32 bits signed integer.
 *  
 * Example 1:
 *      Input: n = 43261596
 *      Output: 964176192
 *      Explanation:
 *      Integer	    Binary
 *      43261596	00000010100101000001111010011100
 *      964176192	00111001011110000010100101000000
 */

function reverseBits(n: number): number {
    let res = 0

    for (let i = 0; i < 32; i++) {
        res = (res << 1) | (n & 1)
        n >>>= 1
    }

    return res >>> 0
};
const n = 2147483620
const x = reverseBits(n)
console.log(n.toString(2));
console.log(x);
console.log(x.toString(2));
