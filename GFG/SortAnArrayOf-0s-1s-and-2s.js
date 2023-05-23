/*
Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.


Example 1:

Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.
Example 2:

Input: 
N = 3
arr[] = {0 1 0}
Output:
0 0 1
Explanation:
0s 1s and 2s are segregated 
into ascending order.

Your Task:
You don't need to read input or print anything. Your task is to complete the function sort012() that takes an array arr and
 N as input parameters and sorts the array in-place.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)


Constraints:
1 <= N <= 10^6
0 <= A[i] <= 2
*/

/* function sort012(arr) {
    let ZC = 0;
    let OC = 0;
    let TC = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            ZC++;
        } else if (arr[i] == 1) {
            OC++;
        } else {
            TC++;
        }
    }

    let j = 0;

    for (let i = 0; i < ZC; i++) {
        arr[j] = 0;
        j++;
    }

    for (let i = 0; i < OC; i++) {
        arr[j] = 1;
        j++;
    }

    for (let i = 0; i < TC; i++) {
        arr[j] = 2;
        j++;
    }

    return arr;
} */

//=================or===========
function sort012(arr) {
    let ZC = 0;
    let OC = 0;
    let TC = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            ZC++;
        } else if (arr[i] == 1) {
            OC++;
        } else {
            TC++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (ZC) {
            arr[i] = 0;
            ZC--;
        } else if (OC) {
            arr[i] = 1;
            OC--;
        } else if (TC) {
            arr[i] = 2;
            TC--;
        }
    }
    return arr;
}

let a = sort012([0, 2, 1, 2, 0]);
console.log(a);