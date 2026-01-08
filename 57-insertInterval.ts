/**
 * 57. Insert Interval
Medium
Topics
premium lock iconCompanies
Hint

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

 */


function insert(intervals: number[][], newInterval: number[]): number[][] {
    
    if (intervals.length === 0) {
        return [newInterval]
    }
    const res:number[][] = []

    for (let i = 0; i < intervals.length; i++) {
        let [start, end] = intervals[i];

        if (end < newInterval[0]) {
            res.push([start, end])
            continue
        }
        else if (start > newInterval[1]) {
            return [...res, newInterval, ...intervals.slice(i)]
        }
        else if(end >= newInterval[0]){
            start = Math.min(start, newInterval[0])
            while (intervals[i+1]?.[0] <= newInterval[1]) {
                i++
            }
            end = Math.max(intervals[i][1], newInterval[1])
            res.push([start, end])
            return [...res, ...intervals.slice(i+1)]

        }        
        
    }


    return res
};

const intervals = [[1,5]], newInterval = [6,8]

console.log(insert(intervals, newInterval));
