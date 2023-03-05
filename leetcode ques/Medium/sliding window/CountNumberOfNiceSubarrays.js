/*
Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.

 

Example 1:

Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
Example 2:

Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There is no odd numbers in the array.
Example 3:

Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16
 

Constraints:

1 <= nums.length <= 50000
1 <= nums[i] <= 10^5
1 <= k <= nums.length
*/

var numberOfSubarrays = function (nums, k) {
    let prefix = 0;
    let noOfOdd = 0;
    let result = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {

        // if(nums[right]%2!=0){
        //     countOfOdd++;
        // }
        //=======or======
        if (nums[right] & 1) {
            noOfOdd++
        }

        while (noOfOdd > k && left < right) {
            // if(nums[left]%2!=0){
            //     countOfOdd--;
            // }
            //====or=====
            if (nums[left] & 1) {
                noOfOdd--;
            }
            left++;
            prefix = 0;
        }

        // while(nums[left]%2==0 && left<right){
        //=====or=====
        while (!(nums[left] & 1) && left < right) {
            left++;
            prefix++;
        }

        if (noOfOdd == 3) {
            result += prefix + 1;
        }
    }
    return result;
}

let a = numberOfSubarrays([1, 1, 2, 1, 1], 3);
console.log(a);