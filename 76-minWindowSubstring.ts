/**
76. Minimum Window Substring
Hard
Topics
premium lock iconCompanies
Hint

Given two strings s and t of lengths m and n respectively, return the minimum window

of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

*/


function minWindow(s: string, t: string): string {
    const hash = new Map<string, number>()
    let count = t.length
    let start = 0
    let end = 0
    let startIndex = 0
    let min = Number.POSITIVE_INFINITY

    for (const element of t) {
        const prev = hash.get(element) ?? 0
        hash.set(element, prev + 1)
    }

    while (end < s.length) {
        const aux = hash.get(s[end]) ?? - 1
        hash.set(s[end],aux-1)
        if (aux - 1 === 0) {
            count--
        }
        
        while (count === 0) {
            if (end - start < min) {
                startIndex = start
                min = end - start
            }
            const aux2 = hash.get(s[start]) ?? - 2
            hash.set(s[start],aux2+1)
            if (aux2 + 1 === 1) {
                count++
            }
            start++
        }
        end++
    }
    
    
    
    return min === Number.POSITIVE_INFINITY ? '' : s.slice(startIndex, min)
};



function minWindow2(s: string, t: string): string {
    if (!s || !t || s.length < t.length) {
        return "";
    }

    // ASCII character frequency map
    const map: number[] = new Array(128).fill(0);

    let count = t.length;
    let start = 0;
    let end = 0;
    let minLen = Number.MAX_SAFE_INTEGER;
    let startIndex = 0;

    // Populate frequency map for t
    for (const c of t) {
        map[c.charCodeAt(0)]++;
    }

    while (end < s.length) {
        const endCharCode = s[end].charCodeAt(0);

        if (map[endCharCode]-- > 0) {
            
            count--;
        }
        end++;

        while (count === 0) {
            if (end - start < minLen) {
                startIndex = start;
                minLen = end - start;
            }

            const startCharCode = s[start].charCodeAt(0);
            if (map[startCharCode]++ === 0) {
                
                count++;
            }
            start++;
        }
    }

    return minLen === Number.MAX_SAFE_INTEGER
        ? ""
        : s.substring(startIndex, startIndex + minLen);
}


const s = "ADOBECXXBANC", t = "ABC"

console.log(minWindow2(s,t));
