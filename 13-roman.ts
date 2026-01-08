/**
 * 13. Roman to Integer
Easy
Topics
premium lock iconCompanies
Hint

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */


function romanToInt(s: string): number {
    const nums = []

    let res = 0

    function convert(roman: string): number {
        switch (roman) {
            case 'I':
                return 1
            case 'V':
                return 5

            case 'X':
                return 10

            case 'L':
                return 50

            case 'C':
                return 100

            case 'D':
                return 500

            case 'M':
                return 1000

            default:
                return 0
        }
    }

    for (let i = 0; i < s.length; i++) {
        nums.push(convert(s[i]))
    }
    let i = 0
    while (i < nums.length) {
        if (nums[i] < nums[i+1]) {
            res += nums[i+1] - nums[i]
            i += 2
        }else{
            res += nums[i]
            i += 1
        }

    }
    
    return res
};


function intToRoman(num:number): string {
    let aux = num
    let count = 1
    let res = ''
    const digits:number[] = []
    const values = [1000, 500, 100, 50, 10, 5, 1]
    const map = new Map<number, string>([
        [1, "I"],
        [5, "V"],
        [10, "X"],
        [50, "L"],
        [100, "C"],
        [500, "D"],
        [1000, "M"],
    ]);

    // while(aux > 0){
    //     const diff = aux % Math.pow(10, count)

    //     digits.push(diff)
    //     count++
    //     aux -= diff


    // }

    console.log(digits);

    for (let i = 0; i < digits.length; i++) {
        if (map.has(digits[i])) {
            res.concat(map.get(digits[i])!)
        }else{

            for (let j = 0; j < values.length; j++) {
                
                
            }

        }


        
    }
    
    
    return ''
}

const s = 'MCMXCIV'

// console.log(romanToInt(s));
console.log(intToRoman(234));
