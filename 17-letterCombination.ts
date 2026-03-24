/**
 * 17. Letter Combinations of a Phone Number
 * Medium
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 *  
 * Example 1:
 *      Input: digits = "23"
 *      Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * 
 * Constraints:
 *      1 <= digits.length <= 4
 *      digits[i] is a digit in the range ['2', '9'].
*/


function letterCombinations(digits: string): string[] {

    const letters = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }

    const res: string[] = []
    const n = digits.length

    for (const letter of letters[digits[0] as keyof typeof letters]) {
        dfs(0, letter)
    }


    function dfs(index: number, word: string) {
        if (index === n - 1) {
            return res.push(word)
        } else {
            for (const letter of letters[digits[index + 1] as keyof typeof letters]) {
                dfs(index + 1, word + letter)
            }

        }


    }


    return res
};

const digits = '92'

console.log(letterCombinations(digits));