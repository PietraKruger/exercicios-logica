let valorProduto = Number (prompt("Digite o valor do seu produto:"))
let valorVenda;

if (valorProduto < 20){

alert ("Você deve vender seu produto por: " + (valorVenda = (valorProduto + (valorProduto * 0.45))) + " reais")
}

else {
   alert ("Você deve vender seu produto por: " + (valorVenda = (valorProduto + (valorProduto * 0.30))) + " reais")
}