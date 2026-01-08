/**
 * same as two sum, but the array is sorted
 */

function twoSum(numbers: number[], target: number) : number[]{
    let l = 0
    let r = numbers.length - 1

    while (l < r) {
        const sum = numbers[l] + numbers[r] 
        if (sum === target) {
            return [l+1, r+1]
        }else if(sum > target){
            r--
        }else if(sum < target){
            l++
        }
    }

    return [l+1, r+1]

}

const numbers = [1,2,7,11,15], target = 17

console.log(twoSum(numbers, target));