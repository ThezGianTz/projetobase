/*
let nome = prompt("Digite seu nome: ")
let salario = prompt("Digite o seu salário: ")
let mesestrab = prompt("Digite os meses que você trabalhou: ")
let decim = salario/12*mesestrab
alert (nome+" seu décimo 13º é " + decim.toFixed(5) + " R$")

let salario = Number(prompt("Digite o seu salário: "))
if (salario < 500){
salario = (15/100*salario)+salario
alert ("Seu novo salário é: "+salario)
} else if (salario >=500 && salario<=1000){
    salario = (10/100*salario)+salario
    alert ("Seu novo salário é: "+salario)
} else{
    salario = (5/100*salario)+salario
    alert ("Seu novo salário é: "+salario)
}

let idade = Number(prompt("Digite sua idade"))
if (idade<12){
    alert("Assista filme Infantil")
}else if (idade>=12 && idade <=17){
    alert("Assista filme Teen")
}else if (idade>=18 && idade<=60){
    alert("Assista filme Adulto")
} else{
    alert("Assista filme Sênior")
}*/
let pontuacao = Number(prompt("Digite sua pontuação: "))
if (pontuacao <=1000){
    alert("Você é Novato e terá 100 XP")
}else if (pontuacao >=1001 && pontuacao<=5000){
    alert("Você é Aprendiz e terá 500 XP")
}else if (pontuacao >=5001 && pontuacao<=10000){
    alert("Você é Expert e terá 1000 XP")
} else{
     alert("Você é Mestre e terá 2000 XP")
}