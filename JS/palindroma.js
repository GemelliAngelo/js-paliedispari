// ! Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userChoice = prompt("Inserisci una parola");
const reverseduserChoice = stringreverse(userChoice);
const isuserChoicepalindrome = isPalindrome(userChoice);

function stringreverse(string) {
  const reversedstring = string.split("").reverse().join("");
  return reversedstring;
}

function isPalindrome(string) {
  const reversedstring = string.split("").reverse().join("");

  if (reversedstring === string) {
    return true;
  } else {
    return false;
  }
}

console.log(userChoice);
console.log(reverseduserChoice);
console.log(
  isuserChoicepalindrome
    ? `${userChoice} è una parola palindroma!`
    : `${userChoice} non è una parola palindroma!`
);
