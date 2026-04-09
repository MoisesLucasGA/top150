/**
 * 150. Evaluate Reverse Polish Notation
 * Medium
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
 * Evaluate the expression. Return an integer that represents the value of the expression.
 * Note that:
 *     The valid operators are '+', '-', '*', and '/'.
 *     Each operand may be an integer or another expression.
 *     The division between two integers always truncates toward zero.
 *     There will not be any division by zero.
 *     The input represents a valid arithmetic expression in a reverse polish notation.
 *     The answer and all the intermediate calculations can be represented in a 32-bit integer.
 *  
 * Example 1:
 *      Input: tokens = ["2","1","+","3","*"]
 *      Output: 9
 *      Explanation: ((2 + 1) * 3) = 9
 * Example 2:
 *      Input: tokens = ["4","13","5","/","+"]
 *      Output: 6
 *      Explanation: (4 + (13 / 5)) = 6
 * Example 3:
 *      Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 *      Output: 22
 *      Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 *      = ((10 * (6 / (12 * -11))) + 17) + 5
 *      = ((10 * (6 / -132)) + 17) + 5
 *      = ((10 * 0) + 17) + 5
 *      = (0 + 17) + 5
 *      = 17 + 5
 *      = 22
 *  
 * Constraints:
 *     1 <= tokens.length <= 104
 *     tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
 * 
 */

function evalRPN2(tokens: string[]): number {

    const stack: string | number[] = [];

    for (const c of tokens) {
        if (c === "+") {
            stack.push(Number(stack.pop()) + Number(stack.pop()));
        } else if (c === "-") {
            const second = Number(stack.pop());
            const first = Number(stack.pop());
            stack.push(first - second);
        } else if (c === "*") {
            stack.push(Number(stack.pop()) * Number(stack.pop()));
        } else if (c === "/") {
            const second = Number(stack.pop());
            const first = Number(stack.pop());
            stack.push(Math.trunc(first / second));
        } else {
            stack.push(Number(c));
        }

    }

    return stack[0];
};


function evalRPN(tokens: string[]): number {

    const ops: string[] = []

    function check() {

        // const x = ops.slice(-3)


        return Number.isNaN(Number(ops[ops.length - 3])) && Number.isInteger(Number(ops[ops.length - 2])) && Number.isInteger(Number(ops[ops.length - 1]))

    }

    function add(func: string, num1: number, num2: number) {
        switch (func) {
            case '+':
                return num1 + num2

            case '-':
                return num2 - num1
            case '*':
                return num1 * num2

            case '/':
                return Math.trunc(num2 / num1)
            default:
                return 0
        }
    }


    while (tokens.length > 0 || ops.length > 1) {
        const stop = check()
        if (!stop) {
            const x = tokens.pop()

            if (x) {
                ops.push(x)
            }
        }


        if (ops.length >= 3 && stop) {
            const x = ops.slice(-3)
            const res = add(x[0], Number(x[1]), Number(x[2]))

            ops[ops.length - 3] = res.toString()
            ops.pop()
            ops.pop()
        }

        // console.log(ops);
    }


    return Number(ops[0])
}

const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
const tokens2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]

// console.log(evalRPN(tokens));
// console.log(evalRPN2(tokens2));


Deno.bench("#1", () => {
    evalRPN(tokens)
})

Deno.bench("#2", () => {
    evalRPN2(tokens2)
})
