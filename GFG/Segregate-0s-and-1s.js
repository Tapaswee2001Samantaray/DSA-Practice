/*
Given an array of length N consisting of only 0s and 1s in random order. Modify the array to segregate 0s on left side and 1s on the 
right side of the array.

Example 1:

Input:
N = 5
arr[] = {0, 0, 1, 1, 0}
Output: 0 0 0 1 1

Example 2:

Input:
N = 4
Arr[] = {1, 1, 1, 1}
Output: 1 1 1 1
Explanation: There are no 0 in the given array, 
so the modified array is 1 1 1 1.

Your Task:
You don't need to read input or print anything. Your task is to complete the function segregate0and1() which takes arr[] and n as input 
parameters and modifies arr[] in-place without using any extra memory.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)


Constraints:
1 ≤ N ≤ 107
0 ≤ arri ≤ 1
*/

function segregate0and1(arr) {
    // let noOfZeros = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == 0) {
    //         noOfZeros++;
    //     }
    // }

    // for (let i = 0; i < noOfZeros; i++) {
    //     arr[i] = 0;
    // }
    // for (let i = noOfZeros; i < arr.length; i++) {
    //     arr[i] = 1;
    // }
    //=============or============
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        // if(arr[left]==0){
        //     left++;
        //     continue;
        // }
        //========or=======
        while (arr[left] == 0 && left < right) {
            left++;
        }
        // if(arr[right]==1){
        //     right--;
        //     continue;
        // }
        //=========or======
        while (arr[right] == 1 && left < right) {
            right++;
        }


        //if arr[left]=1  and arr[right]=0
        //then swap
        // arr[left]=arr[left]+arr[right];
        // arr[right]=arr[left]-arr[right];
        // arr[left]=arr[left]-arr[right];
        // left++;
        // right--;
        //========or==========
        if (left < right) {
            arr[left] = arr[left] + arr[right];
            arr[right] = arr[left] - arr[right];
            arr[left] = arr[left] - arr[right];

            left++;
            right--;
        }
    }
    return arr;
}

let a = segregate0and1([0, 0, 1, 1, 0]);
console.log(a);