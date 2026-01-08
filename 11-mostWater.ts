/**
 * 
 * 11. Container With Most Water
Medium
Topics
premium lock iconCompanies
Hint

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

 * 
 * 
 */

function maxArea(height: number[]): number {
    let l = 0
    let r = height.length - 1
    let area = 0

    while (l < r) {
        if(height[l] < height[r]){
            area = Math.max(area, height[l]*(r-l))
            l++
        }else{
            area = Math.max(area, height[r]*(r-l))
            r--
        }
    }
    
    return area
};

const height = [1,8,6,2,5,4,8,3,7]

console.log(maxArea(height));
