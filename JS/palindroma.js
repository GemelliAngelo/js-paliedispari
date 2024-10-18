// ! Palidroma
// * Chiedere all’utente di inserire una parola
// * Creare una funzione per capire se la parola inserita è palindroma

let userChoice = prompt("Inserisci una parola");

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

document.getElementById(
  "info"
).innerHTML = `<h2 class="py-3 text-center fw-bold text-info">La tua parola: ${userChoice}</h2>
<h2 class="py-3 text-center fw-bold text-info">La tua parola inversa: ${reverseduserChoice}</h2>`;

isuserChoicepalindrome
  ? (document.getElementById(
      "results"
    ).innerHTML = `<h2 class="py-3 text-center fw-bold text-success">${userChoice} è una parola Palindroma</h2>`)
  : (document.getElementById(
      "results"
    ).innerHTML = `<h2 class="py-3 text-center fw-bold text-warning">${userChoice} non è una parola Palindroma</h2>`);
