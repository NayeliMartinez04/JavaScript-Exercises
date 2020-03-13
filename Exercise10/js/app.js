let text = prompt("Escriba una frase");

let letters = "";
let a = text.includes("a");
let e = text.includes("e");
let i = text.includes("i");
let o = text.includes("o");
let u = text.includes("u");

if (a) {
  letters += "Include a\n";
}

if (e) {
  letters += "Include e\n";
}

if (i) {
  letters += "Include i\n";
}

if (o) {
  letters += "Include o\n";
}

if (u) {
  letters += "Include u\n";
}

console.log(letters);
