/*
Merge these two arrays

array1=[
    {name:"a" , value:123},
    {name:"b" , value:666}
]

array2=[
    {name:"c" , value:444},
    {name:"d" , value:666},
    {name:"b" , value:111}
]

output:-

array3=[
    {name:"a" , value:123},
    {name:"b" , value:111},
    {name:"c" , value:444},
    {name:"d" , value:666}
]
*/

function mergeTwoArr(arr1, arr2) {
    let map = new Map();

    for (let i = 0; i < arr1.length; i++) {
        let x = arr1[i].name;
        if (map.has(x)) {
            if (arr1[i].value < map.get(x)) {
                map.set(x, arr1[i].value);
            }
        } else {
            map.set(x, arr1[i].value);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let x = arr2[i].name;
        if (map.has(x)) {
            if (arr2[i].value < map.get(x)) {
                map.set(x, arr2[i].value);
            }
        } else {
            map.set(x, arr2[i].value);
        }
    }

    let arr3 = [];
    for (let key of map) {
        arr3.push({ name: key[0], value: key[1] });
    }
    return arr3;
}

// let array1 = [
//     { name: "a", value: 123 },
//     { name: "b", value: 666 }
// ];
let array1 = [
    { name: "a", value: 123 },
    { name: "b", value: 666 },
    { name: "b", value: 100 }
];

let array2 = [
    { name: "c", value: 444 },
    { name: "d", value: 666 },
    { name: "b", value: 111 }
];

let a = mergeTwoArr(array1, array2);
console.log(a);