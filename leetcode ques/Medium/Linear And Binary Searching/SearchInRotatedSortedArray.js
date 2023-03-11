/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the 
resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7]
might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not 
in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
*/


var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    //which part of given window is sorted
   //does our target exist in that window
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (nums[mid] == target) {

            return mid;

        } else if (nums[low] <= nums[mid]) {//is left part is sorted

            if (target >= nums[low] && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }

        } else {//is right part is sorted

            if (target >= nums[mid] && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

        }
    }
   //TC: O(logn)
   //SC: O(1)
   return -1;//if you have to come out of binary search loop , which means answer does not exist
}

// let a = search([4, 5, 6, 7, 0, 1, 2], 0);
let a = search([4, 5, 6, 7, 0, 1, 2], 3);
console.log(a);