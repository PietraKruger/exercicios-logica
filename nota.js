let nota1 = Number (prompt("Digite a primeira nota:"))
let nota2 = Number (prompt("Digite a segunda nota:"))
let media = ((nota1 + nota2) / 2)

if (media >= 0.00 && media < 4.00) { 
    alert ("Você tirou E!")
}
else if (media >= 4.00 && media < 6.00){
alert ("Você tirou D!")
}
else if (media >= 6.00 && media < 7.5){
alert ("Você tirou C!")
}

else if (media >= 7.5 && media < 9.00){
alert ("Você tirou B!")
}

else {
alert ("Você tirou A, parabéns!")
}

