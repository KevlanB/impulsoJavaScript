var numero1 = Number(window.prompt("Vamos comparar números? \n digite o primeiro numero"));
var numero2 = Number(window.prompt("digite o segundo numero"));

var num1 = numero1;
var num2 = numero2;


function igual(){
    if (num1 == num2){
        return `Os numeros ${num1} e ${num2} são iguais.`
    }else {
        return `Os numeros ${num1} e ${num2} não são iguais.`
    }
}

function soma(){
    let somando = num1 + num2;
    if (somando > 10 && somando > 20){
        return `Sua soma é ${somando}, que é maior que 10 e maior que 20`
    }else if(somando < 10 && somando < 20){
        return `Sua soma é ${somando}, que é menor que 10 e menor que 20`
    }else{
        return `Sua soma é ${somando}, que é maior que 10 e menor que 20`
    }
       
}



window.alert(igual()+soma());

