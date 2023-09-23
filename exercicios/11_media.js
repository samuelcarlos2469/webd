let quantidade = prompt("Digite a quantidade de notas");
vetor = [];
let soma = 0;
let media = 0;
for (i = 0; i < quantidade; i++) {
  vetor.push(parseInt(prompt("Digite a nota")));
  soma += vetor[i];
  media = soma / quantidade;
}
console.log(vetor);
console.log(media);
