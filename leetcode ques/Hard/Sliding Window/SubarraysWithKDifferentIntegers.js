/*
Given an integer array nums and an integer k, return the number of good subarrays of nums.

A good array is an array where the number of different integers in that array is exactly k.

For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
Example 2:

Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
 

Constraints:

1 <= nums.length <= 2 * 104
1 <= nums[i], k <= nums.length
*/

// find the count of subarrays with exactly k distinct elements
//= 
// count of subarrays with atmost k distinct elements - count of subarrays with atmost k-1 distinct elements
var subarraysWithKDistinct = function (nums, k) {
    return countOfAtmostKDistinctEelments(nums, k) - countOfAtmostKDistinctEelments(nums, k - 1);
}

let countOfAtmostKDistinctEelments = function (nums, k) {
    let map = new Map();

    let ansCount = 0;
    let noOfUniqueEle = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);

        if (map.get(nums[right]) == 1) {
            noOfUniqueEle++;
        }

        while (noOfUniqueEle > k) {
            map.set(nums[left], map.get(nums[left]) - 1);
            if (map.get(nums[left]) == 0) {
                noOfUniqueEle--;
            }
            left++
        }
        ansCount = ansCount + (right - left + 1);
    }
    return ansCount;
}

let a = subarraysWithKDistinct([1, 2, 1, 2, 3], 2);
console.log(a);