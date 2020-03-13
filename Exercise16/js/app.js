let number1 = prompt("Escriba un numero");
let number2 = prompt("Escriba otro numero");

for (let i = 0; i <= number1; i++) {
  if (number1 % i == 0 && number2 % i == 0) {
    console.log(" Son divisibles de " + i);
  }
}
