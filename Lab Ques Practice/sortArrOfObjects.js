let persons = [
    { name: "Harriette", age: 78, rank: 4 },
    { name: "Alford", age: 50, rank: 9 },
    { name: "Mac", age: 50, rank: 9 },
    { name: "Tracy", age: 19, rank: 2 },
    { name: "Manolo", age: 99, rank: 2 },
    { name: "Starr", age: 1, rank: 1 },
    { name: "Harald", age: 31, rank: 10 },
    { name: "Laverne", age: 40, rank: 1 },
    { name: "Fannie", age: 80, rank: 10 },
    { name: "Dorisa", age: 48, rank: 3 },
    { name: "Lil", age: 55, rank: 7 },
    { name: "Lil", age: 55, rank: 7 }
];


function bubbleSort(persons) {
    for (let i = 0; i < persons.length; i++) {
        let swap = false;

        for (let j = 0; j < persons.length - 1; j++) {
            if (persons[j].rank > persons[j + 1].rank) {
                let temp = persons[j];
                persons[j] = persons[j + 1];
                persons[j + 1] = temp;
                swap = true;
            }
        }
        if (swap == false) {
            break;
        }
    }

    return persons;
}

let a = bubbleSort(persons);
console.log(a);