/**
 * 289. Game of Life
 * Medium
 * 
 * According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
 * 
 * The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
 *     Any live cell with fewer than two live neighbors dies as if caused by under-population.
 *     Any live cell with two or three live neighbors lives on to the next generation.
 *     Any live cell with more than three live neighbors dies, as if by over-population.
 *     Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 * The next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the m x n grid board. In this process, births and deaths occur simultaneously.
 * Given the current state of the board, update the board to reflect its next state.
 * Note that you do not need to return anything.
 *  
 * Example 1:
 *      Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
 *      Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
 * 
 */



function gameOfLife(board: number[][]): void {
    const rows = board.length
    const cols = board[0].length

    function checkNeighbors(row: number, col: number): number {
        const directions: [number, number][] = [
            [-1, 0], // Up
            [1, 0], // Down
            [0, -1], // Left
            [0, 1], // Right
            [-1, -1], // Top-left
            [-1, 1], // Top-right
            [1, -1], // Bottom-left
            [1, 1], // Bottom-right
        ]

        let count = 0

        for (const [dr, dc] of directions) {

            const newRow = row + dr
            const newCol = col + dc

            if (newRow < 0 || newRow >= rows) {
                continue
            }
            if (newCol < 0 || newCol >= cols) {
                continue
            }

            if (board[newRow][newCol] > 0) {
                count++
            }
        }

        return count
    }




    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const count = checkNeighbors(i, j)

            console.log(`[${i},${j}] = ${count}`);


            if (board[i][j] === 1 && count < 2) {
                board[i][j] = 2
            }
            else if (board[i][j] === 1 && count > 3) {
                board[i][j] = 2
            }
            else if (board[i][j] === 0 && count === 3) {
                board[i][j] = -1
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 2) {
                board[i][j] = 0
            }
            else if (board[i][j] === -1) {
                board[i][j] = 1
            }
        }

    }
};

const board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]

gameOfLife(board)

console.log(board);
