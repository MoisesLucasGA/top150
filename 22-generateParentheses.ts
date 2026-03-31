/**
 * 22. Generate Parentheses
 * Medium
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *  
 * Example 1:
 *      Input: n = 3
 *      Output: ["((()))","(()())","(())()","()(())","()()()"]
 * Example 2:
 *      Input: n = 1
 *      Output: ["()"]
 *  
 * Constraints:
 *     1 <= n <= 8
 * 
 * 
 */


function generateParenthesis(n: number): string[] {

    const res: string[] = []

    function back(open: number, close: number, comb: string) {
        if (comb.length === n * 2) {
            res.push(comb);
            return;
        }

        if (open < n) {
            back(open + 1, close, comb + "(")
        }

        if (close < open) {
            back(open, close + 1, comb + ")")
        }
    }

    back(0, 0, "")

    return res
};



const n = 8

// console.log(generateParenthesis(n));


Deno.bench("#1", () => {
    generateParenthesis(n)
})