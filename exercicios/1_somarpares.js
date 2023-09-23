let soma = 0;
let n = prompt();
for (i = 0; i <= n; i += 2) {
  if (i % 2 === 0) {
    soma += i;
  }
}
console.log(soma);
