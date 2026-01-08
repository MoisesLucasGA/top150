/**
 * 
 * reverse words
 *  
 */
function reverseWords(s: string): string {
    
    return s.split(' ').reverse().join(' ').replace(/\s+/g, ' ').trim()
};