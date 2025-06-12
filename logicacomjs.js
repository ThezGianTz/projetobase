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



let valordobasico = 25;
let valordopremium = 40;
let valordoultra = 60;
let tresa4 = 5;
let maisque4 = 7.50;

let tipodeassinatura = prompt("Digite o nome da assinatura que você deseja: ")
let quantitelas = prompt("Digite quantas telas você terá: ")
if (tipodeassinatura == "básico"){
    if (quantitelas>=3 && quantitelas<=4){
        alert("O seu plano será R$ "+(valordobasico+tresa4))
    } else if (quantitelas>=4){
        alert("O seu plano será R$ "+(valordobasico+maisque4))
    } else {
        alert("O seu plano será R$ "+valordobasico)
    }
} else if (tipodeassinatura == "premium"){
    if (quantitelas>=3 && quantitelas<=4){
        alert("O seu plano será R$ "+(valordopremium+tresa4))
    } else if (quantitelas>=4){
        alert("O seu plano será R$ "+(valordopremium+maisque4))
    } else {
        alert("O seu plano será R$ "+valordopremium)
    }
}  else{
    if (quantitelas>=3 && quantitelas<=4){
        alert("O seu plano será R$ "+(valordoultra+tresa4))
    } else if (quantitelas>=4){
        alert("O seu plano será R$ "+(valordoultra+maisque4))
    } else {
        alert("O seu plano será R$ "+valordoultra)
    }}

let daysOfWeek = ["Raquel", "Maraisa",80,40,10]
console.log(daysOfWeek[1])
console.log(daysOfWeek.length)
let nomedoaluno = prompt("Digite o nome do novo aluno: ")
daysOfWeek.unshift(nomedoaluno)
daysOfWeek.unshift("Miguel", "Alysson", "Arthur", "Nayline")
daysOfWeek.push("João")
daysOfWeek.pop()
daysOfWeek.shift()
daysOfWeek.sort()
daysOfWeek.reverse()
alert("Os alunos atualmente matriculados são: "+daysOfWeek)
alert(daysOfWeek.indexOf("Arthur"))

function filmes(){
let idade = Number(prompt("Digite sua idade"))
if (idade<12){
    alert("Assista filme Infantil")
}else if (idade>=12 && idade <=17){
    alert("Assista filme Teen")
}else if (idade>=18 && idade<=60){
    alert("Assista filme Adulto")
} else{
    alert("Assista filme Sênior")
}
}
filmes()
function dobrarNumero(numero){
 return numero * 2
}
let resultado = dobrarNumero(20)
alert("O resultado é: "+ resultado)

function cumprimentar(nome){
    alert("Oi, "+nome+" tenha um excelente dia!")
}
let nomedousuario = prompt("Digite o seu nome:")
cumprimentar(nomedousuario)
function contagemRegressiva(numero){
    alert(numero)
    if (numero ===0){
    alert("Chegou")
    }
    
    contagemRegressiva(numero-1)
}
contagemRegressiva(5)*/