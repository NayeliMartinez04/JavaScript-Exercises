let num = parseInt(prompt("Escriba un numero"));
let numbers = [];

function isPrimeNumber(number) {
  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      numbers.push(i);
    }
  }

  if (numbers.length == 2 && numbers[0] == 1 && numbers[1] == number) {
    return true;
  } else {
    return false;
  }
}

if (isPrimeNumber(num)) {
  console.log("Es un numero primo");
} else {
  console.log("No es un numero primo");
}
