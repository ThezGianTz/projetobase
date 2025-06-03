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
alert(
    "|O valor do plano básico é: 25R$\n|O valor do plano Premiun é: 40R$ \n|O valor do plano Ultra é: 60R$"
    
)
let valorbasico =  25;
let valorpremium = 40;
let valorultra = 60;
let telas3a4 = 5;
let telasmaisde4 = 7.50;

let tipoassinatura = prompt("Digite a sua assinatura: ")
let quantitelas = prompt("Digite a quantidade de telas que deseja: ")
if (tipoassinatura == "básico"){
    if(quantitelas >=1 && quantitelas <=2){
        alert("Seu plano terá o valor de: R$"+valorbasico)
    }
    else if(quantitelas >=3 && quantitelas <=4){
        alert("Seu plano terá o valor de: R$"+(valorbasico+telas3a4))
    }
    else {
    alert("Seu plano terá o valor de: R$"+(valorbasico+telasmaisde4))
    }
}
else if (tipoassinatura == "premium"){
      if(quantitelas >=1 && quantitelas <=2){
        alert("Seu plano terá o valor de: R$"+valorpremium)
    }
    else if(quantitelas >=3 && quantitelas <=4){
        alert("Seu plano terá o valor de: R$"+(valorpremium+telas3a4))
    }
    else {
    alert("Seu plano terá o valor de: R$"+(valorpremium+telasmaisde4))
    }
}
else{
    if(quantitelas >=1 && quantitelas <=2){
        alert("Seu plano terá o valor de: R$"+valorultra)
    }
    else if(quantitelas >=3 && quantitelas <=4){
        alert("Seu plano terá o valor de: R$"+(valorultra+telas3a4))
    }
    else {
    alert("Seu plano terá o valor de: R$"+(valorultra+telasmaisde4))
    }
}