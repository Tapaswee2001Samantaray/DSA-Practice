//search an element in an infinite array but do not use arr.length-1 to set high value

function searchInfinite(arr , key){
    let low = 0;
    let high = 1;

    while(arr[high] < key){
        low=high;
        high = high*2;
    }
    return binarySearch(arr , key , low , high);
}

function binarySearch(arr , key , low , high){
    let mid;

    while(low <= high){
        mid = Math.floor((low+high)/2);
        if(arr[mid] == key){
            return mid;
        }

        if(arr[mid] < key){
            low = mid+1;
        }else{
            high=mid-1;
        }
    }
    return -1;
}

let array = [1,2,3,4,7,77,88,66]
let key = 77;
console.log(searchInfinite(array , key));