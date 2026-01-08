function productExceptSelf(nums: number[]): number[] {
    const N = nums.length
    const prefix: number[] = new Array(N).fill(1);
    const suffix: number[] = new Array(N).fill(1);

    prefix[0] = nums[0]
    suffix[N - 1] = nums[N - 1]

    for (let i = 1; i < N; i++) {
        prefix[i] = prefix[i - 1] * nums[i]
    }

    for (let i = N - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i];
    }

    const ans = []
    for (let i = 0; i < N; i++) {
        ans[i] = (prefix[i-1]??1) * (suffix[i+1] ?? 1);
    }

    console.log(prefix);
    console.log(suffix);
    

    return ans;

};

const x = [-1,1,0,-3,3]


console.log(productExceptSelf(x));
