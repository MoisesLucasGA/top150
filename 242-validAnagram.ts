/**
 * 242. Valid Anagram
Easy
Topics
premium lock iconCompanies

Given two strings s and t, return true if t is an

of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 */


function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }

    const hashS = new Map<string, number>()
    const hashT = new Map<string, number>()


    for (let i = 0; i < s.length; i++) {
        hashS.set(s[i], (hashS.get(s[i]) ?? 0) + 1)
        hashT.set(t[i], (hashT.get(t[i]) ?? 0) + 1)
    }

    for (const [key, value] of hashS) {
        if (value !== hashT.get(key)) {
            return false
        }
    }


    return true
};


function isAnagram2(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
        t = t.replace(s[i], '')
    }


    return t === ''
};

const s = "acr", t = "car"

console.log(isAnagram2(s, t));
