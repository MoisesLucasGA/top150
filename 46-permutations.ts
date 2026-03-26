/**
 * 46. Permutations
 * Medium
 * Given an array nums of distinct integers, return all the possible . You can return the answer in any order.
 *  
 * Example 1:
 *      Input: nums = [1,2,3]
 *      Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * Example 2:
 *      Input: nums = [0,1]
 *      Output: [[0,1],[1,0]]
 * Example 3:
 *      Input: nums = [1]
 *      Output: [[1]]
 *  
 * Constraints:
 *      1 <= nums.length <= 6
 *      -10 <= nums[i] <= 10
 *      All the integers of nums are unique.
 * 
 */

function permute(nums: number[]): number[][] {
    const res: number[][] = [];
    const n = nums.length;

    function back(i: number, comb: number[]) {
        if (comb.length === n) {
            res.push([...comb]);
        } else {
            for (const start of nums) {
                if (comb.includes(start)) continue;
                else {
                    comb.push(start);
                    back(start, comb);
                    comb.pop();
                }
            }
        }
    }

    back(nums[0], []);

    return res;
};


function permute2(nums: number[]): number[][] {
    const res: number[][] = [];
    const n = nums.length;
    const used = Array(n).fill(false)

    function back(comb: number[]) {
        if (comb.length === n) {
            res.push([...comb]);
        } else {
            for (let i = 0; i < n; i++) {

                if (!used[i]) {
                    comb.push(nums[i]);
                    used[i] = true
                    back(comb);
                    comb.pop();
                    used[i] = false
                }
            }
        }
    }

    back([]);

    return res;
};


const nums = [1, 2, 3, 4, 5, 6, 7]

// console.log(permute2(nums));

Deno.bench("#1", () => { permute(nums) }) // It just keeps checking the comb array to map which positions have already been used.
Deno.bench("#2", () => { permute2(nums) }) // It uses an array to map which positions have already been used.
