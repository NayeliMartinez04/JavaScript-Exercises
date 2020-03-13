let num = prompt("Escriba un numero");

for (let i = 0; i <= num; i++) {
  if (num % i == 0) {
    console.log(num + " Es divisible de " + i);
  }
}
