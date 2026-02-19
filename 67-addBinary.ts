/**
 * 67. Add Binary
 * Easy
 * Given two binary strings a and b, return their sum as a binary string.
 * Example 1:
 *      Input: a = "11", b = "1"
 *      Output: "100"
 * Example 2:
 *      Input: a = "1010", b = "1011"
 *      Output: "10101"
 * 
 */


function addBinary(a: string, b: string): string {

    const diff = Math.max(a.length, b.length)

    a = a.padStart(diff, '0')
    b = b.padStart(diff, '0')

    const res: number[] = []
    let carry = 0
    for (let i = diff - 1; i >= 0 || carry > 0; i--) {

        const n1 = Number(a[i] ?? 0)
        const n2 = Number(b[i] ?? 0)

        const aux = n1 + n2 + carry

        if (aux === 0) {
            res.unshift(0)
        } else if (aux === 1) {
            res.unshift(1)
            carry = 0
        } else if (aux === 2) {
            res.unshift(0)
            carry = 1
        } else if (aux === 3) {
            res.unshift(1)
            carry = 1
        } else { carry = 0 }
    }

    return res.join('')
};


function addBinary2(a: string, b: string): string {
    let res = ''
    let i = a.length - 1
    let j = b.length - 1
    let carry = 0

    while (i >= 0 || j >= 0) {
        let sum = carry
        if (i >= 0) sum += Number(a[i])
        if (j >= 0) sum += Number(b[j])
        i--
        j--
        carry = sum > 1 ? 1 : 0

        res += (sum % 2).toString()

    }

    if (carry !== 0) res += carry.toString()

    return res.split('').reverse().join('')
}


const a = "1010", b = "1011"

console.log(addBinary2(a, b));

