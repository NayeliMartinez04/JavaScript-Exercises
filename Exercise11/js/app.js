let text = prompt("Escriba una frase");
let count = 0;
for (let t = 0; t < text.length; t++) {
  if (
    text[t] == "a" ||
    text[t] == "e" ||
    text[t] == "i" ||
    text[t] == "o" ||
    text[t] == "u"
  ) {
    count++;
  }
}

console.log(count);
