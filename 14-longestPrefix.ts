/**
 * 14. Longest Common Prefix
Easy
Topics
premium lock iconCompanies

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

 * 
 */



function longestCommonPrefix(strs: string[]): string {

    let len = 0

    if (strs.length === 1) {
        return strs[0]
    }


    while (len <= strs[0].length) {
        let stop = false
        for (let i = 0; i < strs.length-1; i++) {
            if (strs[i][len] !== strs[i+1][len]) {
                stop = true
                break
            }
        }
        if (stop) {
            break
        }
        len++
    }

    return strs[0].slice(0,len)
};


const strs = ["aaaaaaa",'aaaaa']

console.log(longestCommonPrefix(strs));
