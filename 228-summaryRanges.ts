function summaryRanges(nums: number[]): string[] {

    if (nums.length === 0) {
        return ['']
    }

    const res: string[] = []
    let start = nums[0].toString()

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            if (start !== nums[i].toString()) {
                res.push(`${start}->${nums[i]}`)
            } else {
                res.push(`${nums[i]}`)
            }
            start = nums[i + 1]?.toString()
        }
    }

    return res
};

const nums = [0,1,2,4,5,7]

console.log(summaryRanges(nums));
