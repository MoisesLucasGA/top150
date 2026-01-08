/**
 * 383. Ransom Note
Easy
Topics
premium lock iconCompanies

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

 */


function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = new Map<string, number>()

    for (const char of ransomNote) {
        const value = map.get(char) ?? 0
        map.set(char, value+1)
    }    
    
    for (const char of magazine) {
        const value = map.get(char) ?? 0
        if (value > 0) {
            map.set(char, value-1)
        }
    }

    for (const [_, value] of map) {
        if (value > 0) {
            return false
        }
    }

    
    return true
};

function canConstruct2(ransomNote: string, magazine: string): boolean {
    let magaHash:any = {}

    for (const c of magazine) {
        magaHash[c] = (magaHash[c] || 0) + 1;
    }

    for (const c of ransomNote) {
        if (!magaHash[c] || magaHash[c] <= 0) {
            return false;
        }
        magaHash[c]--;
    }
    
    return true;
}

const ransomNote = "vou snikajnca", magazine = "vammavvvoi ashhdbiwurrcna"

console.log(canConstruct2(ransomNote, magazine));