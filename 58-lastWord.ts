/**
 * 
 * 58. Length of Last Word
Easy
Topics
premium lock iconCompanies

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
consisting of non-space characters only.
 */


function lengthOfLastWord(s: string): number {

    const x = s.split(' ')
    let last = ''

    let count = 0

    for (let i = s.length -1; i >= 0; i--) {
        if (s[i] !== ' ') {
            count++
        }
        if (s[i] === ' ' && count > 0) {
            break
        }

    }


    return count
};

const s = 'aaaas oi  '

console.log(lengthOfLastWord(s));
// console.log(s.split(' '));
