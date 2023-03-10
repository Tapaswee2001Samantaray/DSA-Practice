/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which 
appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

 

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10
 

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105
*/

var singleNonDuplicate = function (nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);

        if ((mid % 2 == 0 && nums[mid] == nums[mid + 1]) || (mid % 2 != 0 && nums[mid] == nums[mid - 1])) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nums[low];
}

// let a = singleNonDuplicate([1,1,2,3,3,4,4,8,8]);
let a = singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]);
console.log(a);