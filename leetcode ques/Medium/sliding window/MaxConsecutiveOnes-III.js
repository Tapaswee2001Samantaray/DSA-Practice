/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
*/

var longestOnes = function (nums, k) {
    let map = new Map(); // for counting the frequency of the char
    let maxLength = 0; //maxLength of the sub string
    let left = 0; // left pointer
    for (let right = 0; right < nums.length; right++) {
        let num = nums[right];
        map.set(num, (map.get(num) || 0) + 1);

        //if window is valid or not
        while (map.get(0) > k && left <= right) {
            let leftNum = nums[left];
            map.set(leftNum, map.get(leftNum) - 1);
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

let a = longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]);
console.log(a);