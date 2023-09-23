let n = parseInt(prompt("Digite até onde a sequência irá"));
let penultimo = 0;
let ultimo = 1;
let resposta = 0;
for (i = 0; i < n; i++) {
  console.log(penultimo);
  resposta = penultimo + ultimo;
  penultimo = ultimo;
  ultimo = resposta;
}
