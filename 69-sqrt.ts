/**
 * 69. Sqrt(x)
 * Easy
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
 * The returned integer should be non-negative as well.
 * You must not use any built-in exponent function or operator.
 * 
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 *  
 * Example 1:
 *      Input: x = 4
 *      Output: 2
 *      Explanation: The square root of 4 is 2, so we return 2.
 * Example 2:
 *      Input: x = 8
 *      Output: 2
 *      Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 * 
 */


function mySqrtBrute(x: number): number {
    let i = 0

    while (true) {
        if (i * i > x) return i - 1
        i++
    }
};


function mySqrt(x: number): number {
    if (x < 2) {
        return x
    }

    let left = 1
    let right = Math.floor(x / 2)

    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const square = i * i

        if (square === x) return i
        else if (square < x) left = i + 1
        else right = i - 1

    }

    return right
};

const x = 100

console.log(mySqrt(x));


