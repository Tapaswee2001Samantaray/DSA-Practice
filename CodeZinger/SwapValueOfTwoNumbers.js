/*
Given two integers N1 and N2, interchange values of the variable and print it. 


Input 
    4

    10

 

Output 
    10 4 
*/

function solution(a, b) {
    // let temp=a;
    // a=b;
    // b=temp;

    //=======or===
    // [a,b]=[b,a];

    //======or====
    a = a + b;
    b = a - b;
    a = a - b;


    return a + " " + b;
}