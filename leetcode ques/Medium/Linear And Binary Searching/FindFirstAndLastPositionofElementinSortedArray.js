/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/

var searchRange = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    let result = [];

    while ((high - low) > 1) {
        let mid = low + Math.floor((high - low) / 2);

        if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    if (nums[low] == target) {
        result.push(low);
    } else if (nums[high] == target) {
        result.push(high);
    } else {
        result.push(-1);
    }

    /************************************/

    low = 0;
    high = nums.length - 1;

    while ((high - low) > 1) {
        let mid = low + Math.floor((high - low) / 2);

        if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid;
        }
    }

    if (nums[high] == target) {
        result.push(high);
    } else if (nums[low] == target) {
        result.push(low);
    } else {
        result.push(-1);
    }

    return result;
}

// let a = searchRange([5,7,7,8,8,10],8);
let a = searchRange([5, 7, 7, 8, 8, 8, 8, 10], 8);
// let a = searchRange([],8);
console.log(a);