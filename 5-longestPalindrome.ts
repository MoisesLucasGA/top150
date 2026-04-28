/**
 * 5. Longest Palindromic Substring
 * Medium
 * Given a string s, return the longest in s.
 *  
 * Example 1:
 *      Input: s = "babad"
 *      Output: "bab"
 *      Explanation: "aba" is also a valid answer.
 * Example 2:
 *      Input: s = "cbbd"
 *      Output: "bb"
 *  
 * Constraints:
 *     1 <= s.length <= 1000
 *     s consist of only digits and English letters.
 */


function longestPalindrome(s: string): string {

    if (s.length <= 1) {
        return s
    }


    const x = '#' + s.replace(/(.)/gm, '$1#')


    let start = 0
    let max = 1
    let coord = [0, 1]

    while (start < x.length) {


        let aux = 1
        while (x[start - aux] === x[start + aux] && start - aux > 0 && start + aux < x.length) {
            aux++
        }

        if (aux > max) {
            coord = [start - aux, start + aux]
            max = aux
        }

        start++
    }

    return s.substring((1 + coord[0]) >> 1, coord[1] >> 1)

};

const s = "ajushdbajwhbansakjndwqjndjxxxxxxxxxxxxxxaw"

console.log(longestPalindrome(s));
