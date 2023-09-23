vetor = [1, 2, 3, 4, 5];
maior = vetor[0];
menor = vetor[0];
for (i = 0; i < vetor.length; i++) {
  if (vetor[i] > maior) {
    maior = vetor[i];
  }
  if (vetor[i] < menor) {
    menor = vetor[i];
  }
}
console.log("o maior número é " + maior);
console.log("o menor número é " + menor);
