let preço = 1000
let parcelas =  4

let preçop = 1000

if (parcelas > 1 && parcelas <= 3){
    preço = preço + (preço * 0.1)
    preçop = preço / parcelas
}
else if (parcelas > 3 && parcelas <= 5){
    preço = preço + (preço * 0.2)
    preçop = preço / parcelas
}

console.log(`O valor total é de ${preço} e o valor da parcela é de ${preçop}`)
