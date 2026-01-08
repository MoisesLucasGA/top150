/**
 * 205. Isomorphic Strings
Easy
Topics
premium lock iconCompanies

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

    Mapping 'e' to 'a'.
    Mapping 'g' to 'd'.

 * 
 */


function isIsomorphic(s: string, t: string): boolean {

    if (s.length !== t.length) {
        return false
    }

    const arrS = Array(128).fill(0)
    const arrT = Array(128).fill(0)

    for (let i = 0; i < s.length; i++) {
        arrS[s[i].charCodeAt(0)]++
        arrT[t[i].charCodeAt(0)]++
    }

    arrS.sort((a, b) => b - a)
    arrT.sort((a, b) => b - a)

    for (let i = 0; i < s.length; i++) {
        if (arrS[i] !== arrT[i]) {
            return false
        }
    }

    // const mapS = new Map<string, number>()
    // const mapT = new Map<string, number>()

    // for (const char of s) {
    //     const aux = mapS.get(char) ?? 0
    //     mapS.set(char, aux + 1)
    // }

    // for (const char of t) {
    //     const aux = mapT.get(char) ?? 0
    //     mapT.set(char, aux + 1)
    // }

    return true
};


function isIsomorphic2(s: string, t: string) {
    // Se tamanho das strings forem diferentes, não é possível que sejam isomorficas
    if (s.length !== t.length) {
        return false
    }

    // 2 hash's para mapearem a ida e volta
    // Ex: a -> s, s -> a
    const mapS = new Map<string, string>()
    const mapT = new Map<string, string>()


    for (let i = 0; i < s.length; i++) {
        // Em caso de um no char, mapeamos a ida e volta
        if (!mapS.has(s[i]) && !mapT.has(t[i])) {
            mapS.set(s[i], t[i])
            mapT.set(t[i], s[i])
        }
        // Caso do char já estar mapeado
        else {
            // Checamos se o mapeamento é correto, ida e volta.
            if (mapS.get(s[i]) !== t[i] || mapT.get(t[i]) !== s[i]) {
                return false
            }
        }
    }

    return true
}


const s = "aabbba"
const t = "bbaaab"


console.log(isIsomorphic2(s, t));
