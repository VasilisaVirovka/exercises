/*console.log("HEJ Verden!");
document.querySelector(".minHetter").textContent = "Hej Verden!";
console.log(Math.floor(Math.random() * 100));

const Bippi = document.querySelector(".Bippi");

console.log(Bippi);

function TilfTal() {
  Bippi.textContent = Math.floor(Math.random() * 100);
}

TilfTal();
*/

var Gæt = document.querySelector(".gæt");
var Tallet = TilfTal();
const knap = document.querySelector(".button");
var Feedback = document.querySelector(".feedback");
const Kitty = document.querySelector(".cat");

//console.log(Kitty);
console.log(Kitty.style.display);

knap.addEventListener("click", TjekTal);

function TjekTal() {
  if (Number(Gæt.value) < Tallet) {
    Feedback.textContent = "Du har gættet for lavt";
  } else if (Number(Gæt.value) > Tallet) {
    Feedback.textContent = "Du har gættet for højt";
  } else if (Number(Gæt.value) == Tallet) {
    Feedback.textContent = "Du har gættet Rigtigt!";
    Kitty.style.display = "initial";
  }
}

function TilfTal() {
  return Math.floor(Math.random() * 100);
}

console.log(Gæt);
console.log(typeof Gæt.value);
console.log(Number(Gæt.value));
console.log(typeof Number(Gæt.value));
