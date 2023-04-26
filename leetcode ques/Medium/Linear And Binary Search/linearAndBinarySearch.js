/*
//linear search

    //linear search working on both sorted and unsorted array

    function linearSearch(arr , num){
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] == num){
            return i;
            break;
        }
    }
    return -1;
}
let array = [3,4,6,3,7,2,70,5];
let findNum = 0;
console.log(linearSearch(array , findNum));
*/

//binary search

    //binary search working on only sorted array
function binarySearch(arr , key){
   let low , mid , high;

   low = 0;
   hign = arr.length-1;

   //keep searching until low <= high
   while(low <= high){
     mid = Math.floor((low+high)/2);
        if(arr[mid] == key){
            return mid;
        }

        if(arr[mid] < key){
            low = mid+1;
        }else{
            high = mid-1;
        }
   }
   return -1;
}

let array1 = [1,4,7,33,66,123,666,875];
let findKey = 33;
console.log(binarySearch(array1 , findKey));