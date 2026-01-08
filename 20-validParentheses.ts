/**
 * 20. Valid Parentheses
Easy
Topics
premium lock iconCompanies
Hint

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

 */


function isValid(s: string): boolean {
    const stack:string [] = []

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        }else{
            const top = stack[stack.length - 1]
            // const top = stack[stack.length - 1]?.charCodeAt(0)
            // console.log(top);
            // console.log(char.charCodeAt(0));
            
            // if (top === undefined || Math.abs(char.charCodeAt(0) - top) > 2) {
            //     return false
            // }
            if (char === ')' && top !== '(') {
                return false
            }
            if (char === ']' && top !== '[') {
                return false
            }
            if (char === '}' && top !== '{') {
                return false
            }
            stack.pop()
        }
        
    }

    return stack.length === 0
};


const s = "({))"

console.log(isValid(s));
