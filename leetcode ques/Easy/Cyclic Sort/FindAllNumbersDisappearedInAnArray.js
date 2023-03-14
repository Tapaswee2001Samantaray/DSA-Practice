/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do 
not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
 

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
 

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/

var findDisappearedNumbers = function (nums) {
    let i = 0;
    while (i < nums.length) {
        let currentIndex = nums[i] - 1;

        if (nums[i] != nums[currentIndex]) {
            let temp = nums[i];
            nums[i] = nums[currentIndex];
            nums[currentIndex] = temp;
        } else {
            i++;
        }
    }

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i != nums[i] - 1) {
            result.push(i + 1);
        }
    }
    return result;
}

let a = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(a);