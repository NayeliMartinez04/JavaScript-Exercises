let num = prompt("Escriba un numero");

if (num % 2 == 0) {
  console.log("Es divisible de 2");
} else if (num % 3 == 0) {
  console.log("Es divisible de 3");
} else if (num % 5 == 0) {
  console.log("Es divisible de 5");
} else if (num % 7 == 0) {
  console.log("Es divisible de 7");
} else {
  console.log("No es divisible");
}
