/**
 * 
 * 274. H-Index
Medium
Topics
premium lock iconCompanies
Hint

Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.
 */

function hIndex(citations: number[]): number {

    citations.sort((a,b) => b-a)

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] > 0 && citations[i] <= i+1) {
            return Math.max(citations[i], i)
        }
        
    }

    const x = citations.filter((e) => e !== 0)
    
    return citations[0] === 0 ? 0 : x.length
};

const citations = [3,0,1,5]

console.log(hIndex(citations));
