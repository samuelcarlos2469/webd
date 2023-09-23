let pares = 0;
let impares = 0;
let vetor = [1, 2, 3, 4, 5, 6];
for (i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 == 0) {
    pares++;
  } else impares++;
}
console.log(pares, impares);
