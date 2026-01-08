/**
 * 125. Valid Palindrome
Easy
Topics
premium lock iconCompanies

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */


function isPalindrome(s: string): boolean {
    const cleanInput = s.toLowerCase().replace(/[^a-z]/g, '')

    let l = 0
    let r = cleanInput.length - 1

    while (l < r) {
        if (cleanInput[l] !== cleanInput[r]) {
            return false
        }
        l++
        r--
    }

    return true
};


const s = "a"

console.log(isPalindrome(s));
