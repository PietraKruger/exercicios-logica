let idade = Number (prompt ("Digite sua idade para descobrir se pode ou não votar!") )

if (idade < 16 ){
    alert("Você não pode votar!")
}
else if (idade < 18){
    alert("Seu voto é facultativo. O que significa que se você não quiser votar, você não precisa!")
}
else if(idade < 66){
    alert("Seu voto é obrigatório. O que significa que você é obrigado por lei a votar, nem que seja para votar nulo!"
    )
}
else{
    alert("Seu voto é facultativo. O que significa que se você não quiser votar, você nao precisa!")
}