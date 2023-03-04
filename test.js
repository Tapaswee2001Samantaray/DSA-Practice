// function checkAnagram(s1, s2) {

//     if (s1.length != s2.length) {
//         return false;
//     }

//     let freqCout1 = {};
//     let freqCout2 = {};


//     for (let i = 0; i < s1.length; i++) {//bnagram
//         if (freqCout1[s1[i]]) {
//             freqCout1[s1[i]]++;
//         } else {
//             freqCout1[s1[i]] == 1;
//         }
//     }

//     for (let i = 0; i < s2.length; i++) {//nagaram
//         if (freqCout2[s2[i]]) {
//             freqCout2[s2[i]]++;
//         } else {
//             freqCout2[s2[i]] = 1;
//         }
//     }

//     for (let freq in freqCout1) {
//         if (freqCout1[freq] != freqCout2[freq]) {
//             return false;
//         }
//     }

//     return true;
// }

// let s = "bnagram", t = "nagaram";

// let a = checkAnagram(s, t);
// console.log(a);

// let obj = {}
// for (let letter of string1) {
//     obj[letter] = (obj[letter] || 0) + 1
// }
// for (let item of string2) {
//     if (!obj[item]) {
//         return `${string2} is not a anagram of ${string1}`
//     }
//     obj[item] -= 1
// }
// console.log(`${string2} is a anagram of ${string1}`)

// let obj ={
//     name : "Tapas",
//     add : function(){
//         return "Hii";
//     }
// };

// let obj2 = JSON.parse(JSON.stringify(obj));

// console.log(obj);
// console.log(obj2);

// console.log("HIi" && "By");

// let arr = [0, 0, 2, 1, 2, 0, 0, 3, 0];

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     // if(arr[i]==0){
//     //     count++;
//     // }
//     // arr[i] == 0 ? count++ : false;
//     switch (arr[i]){
//         case 0:
//             count++
//     }
// }

// console.log(count);

let n1=0 , n2=1 , n3;
for(let i=2;i<7;i++){
    n3 = n1+n2;
    console.log(n1+","+n2+"="+n3);
    n1=n2;
    n2=n3;
}