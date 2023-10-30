let vetor = [
  [1, 2],
  [2, 4],
];
let vetor2 = [
  [1, 2],
  [2, 4],
];
let vetor3 = [];
vetor3.splice(0,0, [vetor[0][0]*vetor2[0][0]+vetor[0][1]+vetor2[1][0]]);
vetor3.splice(0,1, [vetor[0][0]*vetor2[0][1]+vetor[0][1]*vetor2[1][1]]);
vetor3.splice(1,0, [vetor[1][0]*vetor2[0][0]+vetor[1][1]*vetor2[0][1]]);
vetor3.splice(1,1, [vetor[1][0]*vetor2[1][0]+vetor[1][1]*vetor2[1][1]]);


for(i = 0; i < vetor.length; i++){

}