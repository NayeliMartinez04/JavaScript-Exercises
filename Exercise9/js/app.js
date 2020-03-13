let text = prompt("Escriba una frase");

let lettersA = 0;
for (let t = 0; t < text.length; t++) {
  if (text[t] == "a") {
    lettersA++;
  }
}

console.log(lettersA);
