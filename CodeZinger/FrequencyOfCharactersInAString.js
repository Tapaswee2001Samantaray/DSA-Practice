/*
Given a string S, count the frequency of characters in the string S i.e. which character is present how many times in the string

 

Input:

    hello world

   

    where:

First line represents the input string
 

Output:

    d 1

    e 1

    h 1

    l 3

    o 2

    r 1

    w 1

 

Explanation: Print the count of each distinct letter present in string S.

 

Assumptions:

String contains only lower case letters
Length of string S can be 0 to 10000
*/

function solution(a) {
    if(a==""){
       return "";
    }
    
  let frequencyCounter = {}
  a=a.split(" ").join("").split("").sort().join("");
    
  for(let i=0 ; i<a.length ; i++){
      if(frequencyCounter[a[i]]){
         frequencyCounter[a[i]]++;
      } else {
          frequencyCounter[a[i]] = 1;
      }
  }
    for(let key in frequencyCounter){
        console.log(key+" "+frequencyCounter[key]);
    }
}