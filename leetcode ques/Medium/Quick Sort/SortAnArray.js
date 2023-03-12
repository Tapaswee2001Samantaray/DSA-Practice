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




// A utility function to swap two elements
let swap = function (nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

/* This function takes last element as pivot, places
       the pivot element at its correct position in sorted
       array, and places all smaller (smaller than pivot)
       to left of pivot and all greater elements to right
       of pivot 
*/
let partition = function (nums, low, high) {
    //pivot
    let pivot = nums[high];

    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);

    for (let j = low; j < high; j++) {
        // If current element is smaller
        // than the pivot
        if (nums[j] < pivot) {
            // Increment index of
            // smaller element
            i++;
            swap(nums, i, j);
        }
    }
    swap(nums, i + 1, high);
    return i + 1;
}

/* The main function that implements QuickSort
              arr[] --> Array to be sorted,
              low --> Starting index,
              high --> Ending index
*/
let quickSort = function (nums, low, high) {
    if (low < high) {

        // pIndex is partitioning index, arr[p]
        // is now at right place
        let pIndex = partition(nums, low, high);

        // Separately sort elements before
        // partition and after partition
        quickSort(nums, low, pIndex - 1);
        quickSort(nums, pIndex + 1, high);
    }
}

var sortArray = function (nums) {
    let low = 0;
    let high = nums.length - 1;

    quickSort(nums, low, high);

    return nums;
}

// let a = sortArray([5,2,3,1]);
let a = sortArray([5, 1, 1, 2, 0, 0]);
console.log(a);