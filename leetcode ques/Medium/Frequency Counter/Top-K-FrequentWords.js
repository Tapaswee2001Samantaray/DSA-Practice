/*
Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

 

Example 1:

Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:

Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 
respectively.
 

Constraints:

1 <= words.length <= 500
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
k is in the range [1, The number of unique words[i]]
 

Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?
*/

var topKFrequent = function (words, k) {
    let resultingString = [];

    if (words.length == 0) {
        return resultingString;
    }

    let freqCount = {};
    for (let i = 0; i < words.length; i++) {
        freqCount[words[i]] = (freqCount[words[i]] || 0) + 1;
    }

    let arr1 = Object.entries(freqCount).sort();//[[""]]

    arr1.sort(function (a, b) {

        // if (b[1] == a[1]) {
        //     console.log("hii");
        //     return a[0] > b[0];
        // } else {
        return b[1] - a[1];
        // }

    });

    for (let i = 0; i < k; i++) {
        resultingString.push(arr1[i][0]);
    }

    return resultingString;
};

// let a = topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4);
let a = topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3);
console.log(a);