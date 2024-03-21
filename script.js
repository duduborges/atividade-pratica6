/*
Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”.
*/
/*

let numero = Number(prompt("Digite um numero de 1 a 7"))
if (numero == 1) {
    alert("Hoje é Domingo")
} else if (numero == 1) {
    alert("Hoje é Segunda")
} else if (numero == 2) {
    alert("Hoje é Terça")
} else if (numero == 3) {
    alert("Hoje é Quarta")
} else if (numero == 4) {
    alert("Hoje é Quinta")
} else if (numero == 5) {
    alert("Hoje é Sexta")
} else if (numero == 6) {
    alert("Hoje é Sábado")
} else if (numero == 7) {
    alert("Hoje é Domingo")
} else {
    alert("Dia não reconhecido!")
}
*/

/*
Utilizando FOR, percorra os números de 1 a 10 e imprima no console
os números pares.
*/


/*

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }

}
*/

/*
Utilizando Switch, faça um programa que pergunte em que turno
você estuda. Peça para digitar “M” para matutino ou “V” para
vespertino ou “N” para noturno. Mostre um alerta com a mensagem
“Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
conforme o caso.
*/
/*
let turno = prompt("Digite seu turno (M para matutino, V para vespertino e N para noturno)").toLowerCase()

switch (turno) {
    case "m":
        alert("Bom dia")
        break
    case "v":
        alert("Boa tarde")
        break
    case "n":
        alert("Boa noite")
}
*/
/*
12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
programa que armazene a idade de uma pessoa e diga se ela pode
doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
(&&).

let idade = Number(prompt("Digite sua idade"))

if (idade > 18 || idade < 67) {
    alert("Você pode doar sangue!")
} else {
    alert("Você não pode doar sangue!")

}
*/

/*
Faça um algoritmo que armazene um número e imprima os
números ímpares entre 1 e o número armazenado.


let numArmazenado = Number(prompt("Digite um numero"))
for (let i = 1; i <= numArmazenado; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }

}
*/

/*
Leia um número, utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500 e no final mostre qual o
último valor

*/



let numeroqlqr = Number(prompt("Digite um numero"))
let soma = 0
while (soma < 500) {
    soma = + numeroqlqr
    numeroqlqr *= 3
}

console.log(numeroqlqr)




