//By Garret Gallant
//JavaScript Array Manipulation

//Method Reference:
/*
Spread Operator (...), Nondestructive, insert to add elements to beginning or end of array, must reference array to be spread (make a copy and modify)
.push() Add elements to end of array, Destructive
.unshift() Add elements to beginning of array, Destructive
.shift() Remove first element of array, Destructive
.pop() Remove last element of array, Destructive
.slice() Remove 0 or more elements, 0, 1, or 2 arguments, Generates new array containing removed elements, Nondestructive
.splice() Remove, add, or replace elements. Generates new array contatining removed elements, Destructive
*/

const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const newCats = [
        ...cats.slice(0, 4),
        name,
    ];
    return newCats;
}

//calling function for test purposes
test1 = appendCat("Gato")

//Display array values in console for testing purposes
console.log(test1);
