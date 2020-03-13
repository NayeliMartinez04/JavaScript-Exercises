let text = prompt("Escriba una frase");

let lettersA = 0;
let lettersE = 0;
let lettersI = 0;
let lettersO = 0;
let lettersU = 0;

for (let t = 0; t < text.length; t++) {
  if (text[t] == "a") {
    lettersA++;
  } else if (text[t] == "e") {
    lettersE++;
  } else if (text[t] == "i") {
    lettersI++;
  } else if (text[t] == "o") {
    lettersO++;
  } else if (text[t] == "u") {
    lettersU++;
  }
}

console.log("a: " + lettersA);
console.log("e: " + lettersE);
console.log("i: " + lettersI);
console.log("o: " + lettersO);
console.log("u: " + lettersU);
