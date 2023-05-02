/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and 
it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob
tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400
*/

/* var rob = function (nums) {
    let dp = new Array(nums.length).fill(-1);

    function robRec(nums, i) {
        if (i >= nums.length) {
            return 0;
        }

        if (dp[i] != -1) {
            return dp[i];
        }

        let taken = nums[i] + robRec(nums, i + 2);
        let notTaken = robRec(nums, i + 1);

        return dp[i] = Math.floor(taken, notTaken);
    }

    return robRec(nums, 0);
}
 */

//=========or=======
var rob = function (nums) {
    let n = nums.length;
    let dp = new Array(n + 1).fill(0);

    dp[1] = nums[0];

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1]);
        //two options , one either rob the current house and include all prev loot till i-2 house as can't rob i-1 in that case,
        //or
        //don't rob the current house and include all prev loot till robbing of house i-1
    }
    //TC : O(n)
    //SC: O(n)
    return dp[n];
}

// let a = rob([1, 2, 3, 1]);
let a = rob([2, 7, 9, 3, 1]);
console.log(a);