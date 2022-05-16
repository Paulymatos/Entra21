// // // let soma = 1+1;
// // // console.log("soma:"+soma);

// // // let sub = 1-1;
// // // console.log("subtração:"+sub);

// // // let mult= 1*1;
// // // console.log("multiplicação:"+mult);

// // // let div= 23/5;
// // // console.log("Divisão:"+div);

// // let notaA = 5.0; 
// // let notaB = 8.0;
// // let notaC = 7.0;
// // let notaD = 9.0;

// // let soma = notaA+notaB+notaC+notaD;
// // console.log("soma:"+soma);

// // let media= soma/4;
// // console.log("divisão"+div);

// // function obterMedia(listaDeNumeros) {

// //     let total = 0;
// //     for(let i =0; i< listaDeNumeros.length; i++) {
// //        total += listaDeNumeros[i]
// //     }

// //     return total /  listaDeNumeros.length;
// // }

// function exercicio5() {
//     let inteiro;
//     let sucessor;

//     function cadastrarInteiro() {
//         inteiro = parseFloat(prompt("Digite o numero inteiro"));
//     }

//     function efetuarCalculo() {
//         sucessor = inteiro + 1;
//     }

//     function mostrarResultado() {
//         console.log("Resultado da Progressão:" + sucessor);
//     }
//     cadastrarInteiro();
//     efetuarCalculo();
//     mostrarResultado();
// }

// function exercicio6() {
//     let idadeEmDias


//     function cadastrarIdade() {
//         idadeEmDias = parseFloat(prompt("Digite a idade calculando dias"));
//     }

//     function calculo() {
//         let ano = Math.floor(idadeEmDias / 365);
//         let mes = Math.floor(idadeEmDias % 365 / 30);
//         let dias = Math.floor(idadeEmDias % 365 % 30);

//         console.log(idadeEmDias + " corresponde a " + ano + " anos " + mes + " meses " + dias + " dias");


//     }
//     cadastrarIdade();
//     calculo();
// }
// function exercicio7() {
//     let temperaturaFarenheit

//     function informarTemperatura() {
//         temperaturaFarenheit = parseFloat(prompt(" Digite a Temperatura"));
//     }

//     function converter() {
//         let conversao = parseFloat(5 / 9 * (temperaturaFarenheit - 32)).toFixed(2);
//         console.log("Temperatura em Celsus é:" + conversao);
//     }
//     informarTemperatura();
//     converter();
// }

// function exerc1() {

//     let nota

//     function inserirDados() {
//         nota = parseFloat(prompt("Escreva nota entre 0 e 10:"));
//     }

//     function analisarcondicoesDo() {
//         do {
//             inserirDados();
//             if (nota < 0 || nota > 10) {
//                 alert(" Valor inválido. Digite novamente")
//             }
//         } while (nota < 0 || nota > 10);
//     }

//     function analisarcondicoes() {
//         let condicao = true;
//         while (condicao) {
//             inserirDados();
//             condicao = nota < 0 || nota > 10
//             if (condicao) {
//                 alert(" Valor inválido. Digite novamente")
//             }
//         }
//     }


//     analisarcondicoes()
// }

/*
7.	Faça um programa que leia 5 números e informe o maior número.
*/
function exercicio106() {

    let listaDeNumeros = []

    do {
        let num = parseFloat(prompt(" Digite um numero:"));

        listaDeNumeros.push(num);
    } while (listaDeNumeros.length < 5)

    console.log(listaDeNumeros)

    // [2, 4, 1, 6, 5, 10]

    let maiorNumero = -99999
    for (let i = 0; i < listaDeNumeros.length; i++) {
        if(maiorNumero  < listaDeNumeros [i]){
           maiorNumero = listaDeNumeros[i]
        }
    }

    alert(" maior numero é: " + maiorNumero)
}

/*
8.	Faça um programa que leia 5 números e informe a soma e a média dos números.
*/
function exercicio107() {

    let numero = []

    do {
        let informaçao = parseFloat(prompt("Escreva o numero:"))

        numero.push(informaçao);

    } while (numero.length < 5)

    let total = 0

    for (let i = 0; i < numero.length; i++) {
        total = total + numero[i]
    }



    alert(" A soma é: " + total)
    alert(" A média é:" + total / 5)


}

/*
9.	Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
*/
function exercicio108() {
    let numImpar = []

    for (let i = 1; i <= 50; i++) {

        if (i % 2 != 0) numImpar.push(i)

    }

    alert("Os numeros impares são: " + numImpar)

}
