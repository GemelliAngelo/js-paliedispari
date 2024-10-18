// ! Pari e Dispari
// *
// * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// * Sommiamo i due numeri
// * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// * Dichiariamo chi ha vinto.

const userChoice = prompt("Scegli se pari o dispari");
const userNumber = prompt("Scegli un numero da 1 a 5");

const comNumber = Math.floor(Math.random() * 5) + 1;

console.log(userChoice, userNumber, comNumber);
