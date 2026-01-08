/**
 * 290. Word Pattern
Easy
Topics
premium lock iconCompanies

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

    Each letter in pattern maps to exactly one unique word in s.
    Each unique word in s maps to exactly one letter in pattern.
    No two letters map to the same word, and no two words map to the same letter.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

    'a' maps to "dog".
    'b' maps to "cat".

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"

Output: false

 */

function wordPattern(pattern: string, s: string): boolean {
    // Quebramos a string nos espaços em branco.
    const arr = s.split(' ')


    // Seguimos com a mesma lógica da 205-IsomorphicString
    if (pattern.length !== arr.length) {
        return false
    }

    const patternMap = new Map<string, string>()
    const sMap = new Map<string, string>()

    for (let i = 0; i < arr.length; i++) {
        if (!patternMap.has(pattern[i]) && !sMap.has(arr[i])) {
            patternMap.set(pattern[i], arr[i])
            sMap.set(arr[i],pattern[i])
        }else{
            if (patternMap.get(pattern[i]) !== arr[i] || sMap.get(arr[i]) !== pattern[i]) {
                return false
            }
        }
        
    }
    
    return true
};

const pattern = "abc", s = "dog cat bat"

console.log(wordPattern(pattern, s));
