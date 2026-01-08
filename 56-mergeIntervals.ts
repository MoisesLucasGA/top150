/**
 * 56. Merge Intervals
Medium
Topics
premium lock iconCompanies

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 */


function merge(intervals: number[][]): number[][] {
    const res: number[][] = []
    intervals.sort((a,b) => a[0] - b[0])

    for (let i = 0; i < intervals.length; i++) {
        let [start, end] = intervals[i];

        for (let j = i+1; j < intervals.length; j++) {
            if (end >= intervals[j][0] && end < intervals[j][1]) {
                end = intervals[j][1]
            }
            if (end < intervals[j][0]) {
                break
            }
            i++

        }
        res.push([start, end])
        
    }
    
    
    return res
};


const intervals = [[9,12],[4,5],[1,3],[2,6],[8,10],[15,18]]

console.log(merge(intervals));