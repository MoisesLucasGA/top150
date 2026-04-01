/**
 * 79. Word Search
 * Medium
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 *  
 * Example 1:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 * 
 */


function exist(board: string[][], word: string): boolean {
    const rows = board.length
    const cols = board[0].length
    const n = word.length

    function dfs(index: number, x: number, y: number): boolean {
        if (index === n) {
            return true
        } else if (x >= rows || y >= cols || x < 0 || y < 0 || word[index] !== board[x][y]) return false

        const temp = board[x][y]
        board[x][y] = "0"

        const res = dfs(index + 1, x + 1, y) || dfs(index + 1, x - 1, y) || dfs(index + 1, x, y + 1) || dfs(index + 1, x, y - 1)

        board[x][y] = temp

        return res

    }

    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (word[0] === board[i][j]) {
                if (dfs(0, i, j)) {
                    return true;
                }
            }
        }
    };

    return false

}


function exist2(board: string[][], word: string): boolean {
    const rows = board.length
    const cols = board[0].length
    const n = word.length - 1

    const count = new Array(128).fill(0)

    for (const row of board) {
        for (const col of row) {
            count[col.charCodeAt(0)]++
        }
    }

    for (const char of word) {
        if (--count[char.charCodeAt(0)] < 0) return false
    }


    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false))

    function dfs2(index: number, x: number, y: number): boolean {
        if (index === n) {
            return true
        }

        visited[x][y] = true

        for (const [r, c] of dir) {
            const newRow = x + r
            const newCol = y + c

            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || board[newRow][newCol] !== word[index + 1] || visited[newRow][newCol])
                continue;

            if (dfs2(index + 1, newRow, newCol)) return true


        }

        visited[x][y] = false

        return false

    }



    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            if (word[0] === board[i][j]) {
                if (dfs2(0, i, j)) {
                    return true;
                }
            }
        }
    };


    return false

}

const board = [["C", "T", "X", "D"], ["A", "A", "A", "E"], ["B", "C", "D", "D"], ["C", "C", "T", "B"]], word = "AAADTB"

// console.log(exist(board, word));
// console.log(exist2(board, word));

Deno.bench("#1", () => { exist(board, word) })
Deno.bench("#2", () => { exist2(board, word) })
