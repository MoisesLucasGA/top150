/**
 * 3. Longest Substring Without Repeating Characters
Medium
Topics
premium lock iconCompanies
Hint

Given a string s, find the length of the longest

without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

*/


function lengthOfLongestSubstring(s: string): number {
    const hash = new Set<string>()
    let max = 0
    let l = 0
    for (let i = 0; i < s.length; i++) {
        while (hash.has(s[i])) {
            hash.delete(s[l]);
            l++;
        }

        hash.add(s[i]);
        max = Math.max(max, i - l + 1);
        
    }
    
    return max
};


console.log(lengthOfLongestSubstring('abcbebrbtbytbybbfbrfbsbbbgbhk'));
