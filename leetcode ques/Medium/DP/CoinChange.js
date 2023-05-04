/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total 
amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any 
combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
*/

var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1);//this is the DP array where we are storing the fewest number of coins that we need to make up that each amount(from 1 to amount)
    dp[0] = 0;

    for (let i = 1; i < dp.length; i++) {
        dp[i] = Number.MAX_VALUE;
    }

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                let rest = dp[i - coins[j]];

                if (rest != Number.MAX_VALUE && rest + 1 < dp[i]) {
                    dp[i] = rest + 1;
                }
            }
        }
    }
    return dp[amount] == Number.MAX_VALUE ? -1 : dp[amount];
}

// let a = coinChange([1, 2, 5], 11);
let a = coinChange([2], 3);
console.log(a);