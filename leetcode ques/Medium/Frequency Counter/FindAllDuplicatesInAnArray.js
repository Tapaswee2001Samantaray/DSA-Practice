/*
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:

Input: nums = [1,1,2]
Output: [1]
Example 3:

Input: nums = [1]
Output: []
 

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
Each element in nums appears once or twice.
*/

var findDuplicates = function (nums) {
    // let map = new Map();

    // for (let i = 0; i < nums.length; i++) {
    //     map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    // }

    // let result = [];
    // for (let pairs of map) {
    //     if (pairs[1] > 1) {
    //         result.push(pairs[0]);
    //     }
    // }
    // return result;

    //==========or========

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let x = Math.abs(nums[i]);
        let index = x - 1;

        if (nums[index] < 0) {
            result.push(x);
        } else {
            nums[index] = nums[index] * -1;
        }
    }
    return result;
};

let a = findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(a);