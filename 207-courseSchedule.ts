/**
 * 207. Course Schedule
 * Medium
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] 
 * indicates that you must take course bi first if you want to take course ai.
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return true if you can finish all courses. Otherwise, return false.
 * 
 * Example 1:
 *      Input: numCourses = 2, prerequisites = [[1,0]]
 *      Output: true
 *      Explanation: There are a total of 2 courses to take. 
 *      To take course 1 you should have finished course 0. So it is possible.
 * Example 2:
 *      Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 *      Output: false
 *      Explanation: There are a total of 2 courses to take. 
 *      To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 */


function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const adj: number[][] = Array.from({ length: numCourses }, () => [])
    const visited = new Map<number, 'v' | 'f'>() // V - Visited; F - Finished

    for (const [pre, course] of prerequisites) {
        adj[pre].push(course)
    }



    function dfs(course: number) {
        if (visited.get(course) === 'f') return true
        if (visited.get(course) === 'v') return false

        visited.set(course, 'v')

        for (const next of adj[course]) {
            if (!dfs(next)) return false
        }

        visited.set(course, 'f')

        return true
    }

    for (const [pre, _] of prerequisites) {
        if (!dfs(pre)) return false
    }


    return true
};


const numCourses = 2, prerequisites = [[1, 0],]


console.log(canFinish(numCourses, prerequisites));
