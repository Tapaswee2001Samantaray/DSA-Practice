/*
Given an array a[] of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the 
given array.

Note: The extra space is only for the array to be returned.
Try and perform all operations within the provided array. 

Example 1:

Input:
N = 4
a[] = {0,3,1,2}
Output: -1
Explanation: N=4 and all elements from 0
to (N-1 = 3) are present in the given
array. Therefore output is -1.
Example 2:

Input:
N = 5
a[] = {2,3,1,2,3}
Output: 2 3 
Explanation: 2 and 3 occur more than once
in the given array.
Your Task:
Complete the function duplicates() which takes array a[] and n as input as parameters and returns a list of elements that occur more 
than once in the given array in a sorted manner. If no such element is found, return list containing [-1]. 

Expected Time Complexity: O(n).
Expected Auxiliary Space: O(n).

Constraints:
1 <= N <= 105
0 <= A[i] <= N-1, for each valid i
*/

let duplicates = function (arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    let result = [];
    for (let key of map) {
        if (key[1] > 1) {
            result.push(key[0]);
        }
    }
    if (result.length == 0) {
        result.push(-1);
    }
    result.sort((a, b) => a - b);
    return result;
}

// let a=duplicates([0,3,1,2]);
let a = duplicates([2, 3, 1, 2, 3]);
console.log(a);