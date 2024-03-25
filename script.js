//VARIABLES

console.log("Hello world");

let myName = "Lucy";
console.log(myName); //Output: Lucy in console

let myAge = "25";
console.log(myAge); //Output: 25 in console

let faveColour = "Pink";
console.log(faveColour);

let faveAnimal = "Cat";
console.log(faveAnimal);

let hungry = true;
console.log(hungry);

let a = 10;
let b = 20;
let c = 2.5;
let d = -5;

console.log(a + b); //Output: 30
console.log(b + d); //Output: 15
console.log(a + b + c + d); //Output: 27.5

//string concatenation

let mySurname = "Holmes";

//let concatName = myName + mySurname;
//console.log(concatName); //Output LucyHolmes

let concatName = myName + " " + mySurname;
console.log(concatName); //Output = Lucy Holmes

let word1 = "My";
let word2 = "name";
let word3 = "is";

let concatSentence =
  word1 + " " + word2 + " " + word3 + " " + myName + " " + mySurname;
console.log(concatSentence); //Output: My name is Lucy Holmes

//swap variables

let e = 1;
let f = 2;
console.log(e); //Output: 1
console.log(f); //Output: 2

[e, f] = [f, e];
console.log(e); //Output: 2
console.log(f); //Output: 1

//DATA TYPES

//numbers

console.log("Hello world");

let myNumber = 100;
console.log(myNumber); //Output: 100

let cats = 10;
let dogs = 8;
let animals = cats + dogs;
console.log(animals); //Output: 18

//string literals

let fullName = `${myName} ${mySurname}`;
console.log(fullName); //Output: Lucy Holmes

console.log(`${fullName} is ${fullName.length} characters long`); //Output: Lucy Holmes is 11 characters long

//booleans

let isTrue = true;
console.log(isTrue); // Output: true

let isFalse = false;
console.log(isFalse); // Output: false

//typeof operator

console.log(typeof myName); //Output: string

console.log("The type of number is " + typeof myNumber); //Output: The type of number is number

console.log(`The type of hungry is ${typeof hungry}`); //Output: The type of hungry is boolean

//undefined and null

let cat;
console.log(cat); //Output: undefined as the variable cat has no value

let dog = null;
console.log(dog); //Output: null

//comparisons

let isAgreaterthanB = a > b;
let isAlessthanB = a < b;
let isAEqualToB = a === b;

console.log(isAgreaterthanB); //Output: false
console.log(isAlessthanB); //Output: true
console.log(isAEqualToB); //Output: false

//use string literals and variables to write a sentence

console.log(`My favourite animal is a ${faveAnimal}. I wish I had ${b} cats.`); //Output: My favourite animal is a Cat. I wish i had 20 cats.

//Swap the value of two variable
//let a = 10;
//let b = 20;

[a, b] = [b, a];

console.log(a); //Output: 20
