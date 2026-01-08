function threeSumBrute(nums: number[]): number[][] {
    const res: number[][] = []

    for (let l = 0; l < nums.length - 2; l++) {
        for (let r = 2; r < nums.length; r++) {
            for (let m = l + 1; m < r; m++) {
                if (nums[l] + nums[m] + nums[r] === 0) {

                    res.push([nums[l], nums[m], nums[r]])
                }
            }
        }
    }

    return res
};


function threeSum(nums: number[]): number[][] {
    const res: number[][] = []

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 1; i++) {
        let l = i + 1
        let r = nums.length - 1
        let sum = 0

        if(i > 0 && nums[i] == nums[i - 1]){
            continue;
        }

        while (l < r) {
            sum = nums[i] + nums[l] + nums[r]
            
            if (sum > 0) {
                r--
            } else if (sum < 0) {
                l++
            } else {
                res.push([nums[i], nums[l], nums[r]])

                const last_low_occurence = nums[l]
                const last_high_occurence = nums[r];
                while (l < r && nums[l] == last_low_occurence) {
                    l++;
                }
                while (l < r && nums[r] == last_high_occurence) {
                    r--;
                }
            }

        }


    }

    return res
};

const n = [-4,-1,-1,0,1,2]

console.log(threeSum(n));