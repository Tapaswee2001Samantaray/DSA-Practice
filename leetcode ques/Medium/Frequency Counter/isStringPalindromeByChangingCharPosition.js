/*Check a string can be a palindrum by changing character position*/

// let s = "ABOBANOCCY";
// let s = "AOA";

// var mp = new Map()

// for (let i = 0; i < s.length; i++) {
//     let x = s[i]
//     if (mp.has(x)) {//already present
//         mp.set(x, mp.get(x) + 1)
//     }
//     else {//not present
//         mp.set(x, 1);
//     }
// }

// let c = 0;

// // mp.forEach((value, key) => {
// //     if (value % 2 == 1) {//odd
// //         c++;
// //     }
// // })

// //======or========
// for (let frequency of mp) {
//     console.log(frequency[1]);
//     if (frequency[1] % 2 == 1) {//odd
//         c++;
//     }
// }

// if (c > 1) {
//     console.log("NO");
// }
// else {
//     console.log("YES");
// }


/*Check a string can be a palindrum by changing character position*/

let s = "ABOBANOCCY";
// let s = "AOA";

let map = new Map();

for (let i = 0; i < s.length; i++) {
    // if (map.has(s[i])) {
    //     map.set(s[i], map.get(s[i]) + 1);
    // } else {
    //     map.set(s[i], 1);
    // }
    //========or==========
    map.set(s[i], (map.get(s[i]) || 0) + 1);
}

let count = 0;
for (let freq of map) {
    if (freq[1] % 2 != 0) {
        count++;
    }
}

if (count > 1) {
    console.log("NO");
} else {
    console.log("YES");
}