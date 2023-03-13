/*
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity 
possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other
 numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
 

Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
*/


// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
let merge = function (nums, low, mid, high) {

    // Find sizes of two subarrays to be merged
    let leftWindowSize = mid - low + 1;
    let rightWindowSize = high - mid;

    // Create temp arrays
    let left = new Array(leftWindowSize);
    let right = new Array(rightWindowSize);

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < leftWindowSize; i++) {
        left[i] = nums[low + i];
    }
    for (let j = 0; j < rightWindowSize; j++) {
        right[j] = nums[mid + 1 + j];
    }

    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    let i = 0;
    // Initial index of second subarray
    let j = 0;
    // Initial index of merged subarray
    let k = low;

    while (i < leftWindowSize && j < rightWindowSize) {
        if (left[i] <= right[j]) {
            nums[k] = left[i];
            i++;
        } else {
            nums[k] = right[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < leftWindowSize) {
        nums[k] = left[i];
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < rightWindowSize) {
        nums[k] = right[j];
        j++;
        k++;
    }
}


// Main function that sorts arr[l..r] using
// merge()
let mergeSort = function (nums, low, high) {
    if (low >= high) {
        return;
    }

    // Find the middle point
    let mid = low + Math.floor((high - low) / 2);

    // Sort first and second halves
    mergeSort(nums, low, mid);
    mergeSort(nums, mid + 1, high);

    // Merge the sorted halves
    merge(nums, low, mid, high);
}

var sortArray = function (nums) {
    let low = 0;
    let high = nums.length - 1;

    mergeSort(nums, low, high);

    return nums;

    //T:O(nlogn)
    //s:O(n)
};

let a = sortArray([5, 2, 3, 1]);
console.log(a);