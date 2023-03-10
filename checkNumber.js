/*
Take an input and check whether that input is an integer or not.
*/

let checkInteger = function(num){
    // if(num%1===0){
    //     return true;
    // }
    // return false;

    if((num>(-Number.MAX_VALUE) && num<0) || (num<Number.MAX_VALUE && num>1)){
        if(num%1===0){

            return true;
        }
        
    }

    if(num===0 || num===1){ 
        return true;
    }

    return false;
    // let pattern = /^-?[0-9]+$/
    // let result = pattern.test(num);

    // return result;
}

// let a = checkInteger(5678);
// let a = checkInteger("5sd6d78");
// let a = checkInteger("abc");
// let a = checkInteger([1,2,3]);
// let obj={
//     a:1,
//     b:2
// }
// let a = checkInteger(obj);
// let a = checkInteger(false);
// let a = checkInteger(undefined);
// let a = checkInteger(-123);
let a = checkInteger(123.5723);
console.log(a);