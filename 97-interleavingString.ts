/**
 * 97. Interleaving String
 * Medium
 * Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
 * An interleaving of two strings s and t is a configuration where s and t are divided into n and m respectively, such that:
 *     s = s1 + s2 + ... + sn
 *     t = t1 + t2 + ... + tm
 *     |n - m| <= 1
 *     The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
 * Note: a + b is the concatenation of strings a and b.
 *  
 * Example 1:
 *      Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
 *      Output: true
 *      Explanation: One way to obtain s3 is:
 *      Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
 *      Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
 *      Since s3 can be obtained by interleaving s1 and s2, we return true.
 * Example 2:
 *      Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
 *      Output: false
 *      Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.
 * Example 3:
 *      Input: s1 = "", s2 = "", s3 = ""
 *      Output: true
 *  
 * Constraints:
 *     0 <= s1.length, s2.length <= 100
 *     0 <= s3.length <= 200
 *     s1, s2, and s3 consist of lowercase English letters.
 */

// Recursive attempt => Time Limit Exceeded
function isInterleaveRecursive(s1: string, s2: string, s3: string): boolean {

    const n1 = s1.length
    const n2 = s2.length
    const n3 = s3.length

    if (n1 + n2 !== n3) return false

    function check(i1: number, i2: number, i3: number): boolean {
        if (i1 === n1 && i2 === n2 && i3 === n3) {
            return true
        }

        if (s3[i3] !== s2[i2] && s3[i3] !== s1[i1] || i3 > n3) {
            return false
        }

        if (s3[i3] === s2[i2] && s3[i3] === s1[i1]) {
            return check(i1 + 1, i2, i3 + 1) || check(i1, i2 + 1, i3 + 1)
        } else if (s3[i3] === s2[i2]) {
            return check(i1, i2 + 1, i3 + 1)
        } else {
            return check(i1 + 1, i2, i3 + 1)
        }

    }


    return check(0, 0, 0)
};


function isInterleave(s1: string, s2: string, s3: string): boolean {
    const m = s1.length
    const n = s2.length


    if (m + n !== s3.length) {
        return false
    }

    const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => false))

    dp[m][n] = true

    for (let i = m; i >= 0; i--) {
        for (let j = n; j >= 0; j--) {
            if (i < m && s1[i] === s3[i + j] && dp[i + 1][j]) {
                dp[i][j] = true
            }
            if (j < n && s2[j] === s3[i + j] && dp[i][j + 1]) {
                dp[i][j] = true
            }
        }

    }
    return dp[0][0]
};

const s1 = "bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa", s2 = "babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab", s3 = "babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab"

// console.log(isInterleaveRecursive(s1, s2, s3));
// console.log(isInterleave(s1, s2, s3));


Deno.bench("Recusive Brute Force", () => { isInterleaveRecursive(s1, s2, s3) })
Deno.bench("DP", () => { isInterleave(s1, s2, s3) })