// ! Pari e Dispari
// *
// * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// * Sommiamo i due numeri
// * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// * Dichiariamo chi ha vinto.

// # VARIABILI

const validChoices = ["pari", "dispari"];

let userChoice = askString(validChoices, "Scegli se pari o dispari");
let userNumber = askNumber(1, 5, "Scegli un numero da 1 a 5");
const comNumber = randomizer(1, 5);
const sum = numbersSum(userNumber, comNumber);
const isSumEven = sum % 2 === 0;

// # FUNZIONI

// FUNZIONE ASKSTRING
function askString(whitelist = [], message) {
  let userString = prompt(message);

  while (!whitelist.includes(userString)) {
    userString = prompt("Hai sbagliato. " + message);
  }
  return userString;
}

// FUNZIONE ASKNUMBER
function askNumber(min, max, message) {
  let number = parseInt(prompt(message));

  while (max > number > min || isNaN(number)) {
    number = parseInt(prompt("Hai sbagliato. " + message));
  }
  return number;
}

// FUNZIONE RANDOMIZER
function randomizer(min, max) {
  min = parseInt(min);
  max = parseInt(max);

  if (isNaN(min) || isNaN(max)) {
    console.error("Minimo e Massimo accettano solo valori numerici");
    return false;
  }

  if (min >= max) {
    console.error("Il Minimo deve essere minore del Massimo");
    return false;
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + 1;
  return randomNumber;
}

// FUNZIONE SOMMA
function numbersSum(num1, num2) {
  const numSum = num1 + num2;
  return numSum;
}

console.log("La tua scelta: " + userChoice);
console.log("Il tuo numero: " + userNumber);
console.log("Il numero avversario: " + comNumber);
console.log("La somma: " + sum);
console.log(isSumEven ? "La somma è pari" : "La somma è dispari");
