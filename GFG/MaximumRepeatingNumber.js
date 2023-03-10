/*
Given an array Arr of size N, the array contains numbers in range from 0 to K-1 where K is a positive integer and K <= N. Find the 
maximum repeating number in this array. If there are two or more maximum repeating numbers return the element having least value.

Example 1:

Input:
N = 4, K = 3
Arr[] = {2, 2, 1, 2}
Output: 2
Explanation: 2 is the most frequent
element.
Example 2:

Input:
N = 6, K = 3
Arr[] = {2, 2, 1, 0, 0, 1}
Output: 0
Explanation: 0, 1 and 2 all have same
frequency of 2.But since 0 is smallest,
you need to return 0.
Your Task:
You don't need to read input or print anything. Your task is to complete the function maxRepeating() which takes the array of 
integers arr, n and k as parameters and returns an integer denoting the answer.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(K)

Constraints:
1 <= N <= 107
1 <= K <= N
0 <= Arri <= K - 1
*/

let maxRepeating = function (arr, n) {
    let map = new Map();

    for (let i = 0; i < n; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    let maxFreq = 0;
    let result = 0;

    for (let freq of map) {
        if (freq[1] > maxFreq) {
            maxFreq = freq[1];
            result = freq[0];
        } else if (freq[1] == maxFreq) {
            if (freq[0] < result) {
                result = freq[0];
            }
        }
    }
    return result;
}

let a = maxRepeating([2, 2, 1, 2], 4);
console.log(a);