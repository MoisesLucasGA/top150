function wordBreakBruteForce(s: string, wordDict: string[]): boolean {

    const map = new Map<string, number>()

    for (const word of wordDict) {
        map.set(word, 0)
    }


    function dfs(target: string, index: number): boolean {
        if (target === '') {
            return true
        }

        if (index > target.length) {
            return false
        }

        const word = target.slice(0, index)

        let res

        if (map.has(word)) {
            res = dfs(target.slice(index), 0)
        }

        return res || dfs(target, index + 1)

    }

    return dfs(s, 0)
};


function wordBreak(s: string, wordDict: string[]): boolean {

    const dp: boolean[] = new Array(s.length + 1).fill(false);

    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (const w of wordDict) {
            const start = i - w.length;
            if (start >= 0 && dp[start] && s.substring(start, i) === w) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
}

const s =
    "aaaaaaaaaaaaaaaaaaaaaaaaab", wordDict = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]

// console.log(wordBreak(s, wordDict));


Deno.bench("#1 Brute Force", () => {
    wordBreakBruteForce(s, wordDict)
})


Deno.bench("#2 Bottom Up", () => {
    wordBreak(s, wordDict)
})