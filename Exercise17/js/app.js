let num = prompt("Escriba un numero");
num = parseInt(num);
let numbers = [];

function isPrimeNumbers(number) {
  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      numbers.push(i);
    }
  }

  if (numbers.length === 2 && numbers[0] === 1 && numbers[1] === number) {
    return true;
  } else {
    return false;
  }
}

if (isPrimeNumbers(num)) {
  console.log("Is a prime number");
} else {
  console.log("Is not a prime number");
}
