'use strict'
//Задание 1
const city = 'Odessa';
console.log(city);
console.log(typeof city);

const contry = 'Ukraine';
console.log(contry);
console.log(typeof contry);

const populationOdessa = 1015826;
console.log(populationOdessa);
console.log(typeof populationOdessa);

const stadium = true;
console.log(stadium);
console.log(typeof stadium);

//Задание 2

const width = 40;
const heidth = 70;
console.log(width * heidth);

// Задание 3
let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;
console.log((speedOfSecond * time) - (speedOfFirst * time));

//Задание 4
const randomNumber = Math.floor(Math.random() * 100);

if ("randomNumber < 20") {
   console.log("randomNumber меньше 20")
} else if (randomNumber > 50) {
   console.log("randomNumber больше 50")
} else {
   console.log("randomNumber больше 20, и меньше 50")
}

//Задание 5
let num;
switch (randomNumber) {
   case "randomNumber меньше 20":
      num = randomNumber < 20;
      break;

   case "randomNumber больше 50":
      num = randomNumber > 50
      break;
   default:
      "randomNumber больше 20, и меньше 50"
}