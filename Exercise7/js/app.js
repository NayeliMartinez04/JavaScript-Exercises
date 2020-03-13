let number1 = prompt("Escriba un numero");
let number2 = prompt("Escriba otro numero");
let number3 = prompt("Escriba otro numero");
if (number1 > number2 && number1 > number3) {
  console.log(number1 + " Es mayor");
} else if (number2 > number1 && number2 > number3) {
  console.log(number2 + " Es mayor");
} else if (number3 > number1 && number3 > number2) {
  console.log(number3 + " Es mayor");
}
