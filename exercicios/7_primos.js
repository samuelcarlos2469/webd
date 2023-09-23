let n = prompt("Digite o número a ser verificado"); //2 é o único par, pra saber se é primo tem q ir verificando se tem mais de um divisor ou não
for (verificador = 2; verificador < n; verificador++) {
  if (n % verificador === 0) {
    console.log("Esse número não é primo"); //não sei fazer escrever só uma vez, ainda
  } else {
    console.log("Esse número é primo");
  }
}
