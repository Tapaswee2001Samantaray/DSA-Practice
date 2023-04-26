/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back
in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile.
If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

 

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
 

Constraints:

1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109
*/

let calculateTimeTaken = function (speed, piles) {
    let time = 0;
    for (let i = 0; i < piles.length; i++) {
        time += Math.ceil(piles[i] / speed);
    }
    return time;
}

var minEatingSpeed = function (piles, h) {
    let maxPileSize = 0;
    let minSpeed = 0;

    for (let i = 0; i < piles.length; i++) { //O(n) maxPileSize
        maxPileSize += piles[i];
    }

    //speed range. [1......maxPileSize]  banana/hour
    let low = 1;//not denoting index
    let high = maxPileSize;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        let timeTaken = calculateTimeTaken(mid, piles);

        if (timeTaken <= h) {
            minSpeed = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return minSpeed;
}

let a = minEatingSpeed([3, 6, 7, 11], 8);
// let a = minEatingSpeed([30,11,23,4,20],6);
console.log(a);