/*
Given an animal array . The animals can be repeated . Print the data that how many times each animal is repeated.
*/

function frequencyOfAnimals(animals) {
    let map = new Map();

    for (let i = 0; i < animals.length; i++) {
        map.set(animals[i], (map.get(animals[i]) || 0) + 1);
    }

    for (let key of map) {
        console.log("Animal= " + key[0] + " repeated " + key[1] + " times.");
    }
}
let arr = ["cat", "dog", "monkey", "tiger", "cat", "dog", "monkey", "tiger", "lion", "elephant"];

frequencyOfAnimals(arr);