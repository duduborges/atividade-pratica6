/*
---------- 1 -----------
1. Crie uma variável para ler a idade de um motorista. Caso o
motorista tenha idade maior ou igual a 18 anos imprime no console
“Pode dirigir”, caso contrário imprima “Não pode dirigir”.
/*

---------- 2 -----------
/*

2. Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, insira no
--------- 6 ----------
/*

----------- 3 --------------

let numero = Number(prompt("Digite um numero de 1 a 7"))
if (numero == 1) {
    alert("Hoje é Domingo")
} else if (numero == 2) {
    alert("Hoje é Segunda")
} else if (numero == 3) {
    alert("Hoje é Terça")
} else if (numero == 4) {
    alert("Hoje é Quarta")
} else if (numero == 5) {
    alert("Hoje é Quinta")
} else if (numero == 6) {
    alert("Hoje é Sexta")
} else if (numero == 7) {
    alert("Hoje é Sábado")
} else {
    alert("Dia não reconhecido!")
}
*/

/*
--------- 4 ----------


let numero = Number(prompt("Digite um numero de 1 a 7"))

switch (numero) {
    case 1:
        alert("Hoje é Domingo")
        break
    case 2:
        alert("Hoje é Segunda")
        break
    case 3:
        alert("Hoje é Terça")
        break
    case 4:
        alert("Hoje é Quarta")
        break
    case 5:
        alert("Hoje é Quinta")
        break
    case 6:
        alert("Hoje é Sexta")
        break
    case 7:
        alert("Hoje é Sabado")
        break
    default:
        alert("Dia não reconhecido!")
        break
}
*/

/*
--------- 5 ----------

for (let i = 0; i <= 10; i++) {
    pares = i % 2 == 0
    console.log(pares)
}
*/



/*

--------- 6 ----------
for (let i = 0; i <= 30; i++) {
    document.write(i, "<br>")
}
*/



/*
--------- 7 ----------


let num = 10
let soma = 0
do {
    soma += num
    num++
} while (num <= 100)
console.log("a soma de todos os números entre 10 e 100 é : ", soma)

*/

/*
8. Crie uma variável para armazenar o salário do usuário e atribua um
valor a essa variável. Crie a validação necessária:
*/

/*
--------- 9 ----------


let valor = Number(prompt("Digite um numero"))
if (valor <= 1) {
    alert("Não é primo")
}
for (let i = 2; i <= Math.sqrt(valor); i++) {
    if (valor % i === 0) {
        alert("Não é primo")
    } else {
        alert("É primo")
    }
}

*/


/*

10. Tendo como entrada a altura e o sexo (codificado da seguinte
forma: 1 para sexo feminino e 2 para sexo masculino) de uma
pessoa, construa um programa que calcule e mostre seu peso ideal,
utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7
----------- 10 --------------

let sexo = prompt("Digite seu sexo (1 = Feminino) (2 = Masculino)")
let altura = Number(prompt("Digite sua altura"))
let pesoIdeal = 0
if (sexo == "1") {
    pesoIdeal = (62.1 * altura) - 44.7
    alert(" Seu peso ideal é " + pesoIdeal)
} else if (sexo == "2") {
    pesoIdeal = (72.7 * altura) - 58
    alert(" Seu peso ideal é " + pesoIdeal)
}
*/







/*
----------- 11 --------------

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
----------- 12 --------------


let idade = Number(prompt("Digite sua idade"))

if (idade > 18 || idade < 67) {
    alert("Você pode doar sangue!")
} else {
    alert("Você não pode doar sangue!")

}
*/

/*
----------- 13 --------------


let numArmazenado = Number(prompt("Digite um numero"))
for (let i = 1; i <= numArmazenado; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }

}
*/

/*
-------- 14 ----------

let numeroqlqr = Number(prompt("Digite um numero"))
let soma = 0
while (soma < 500) {
    soma = + numeroqlqr
    numeroqlqr *= 3
}

console.log(numeroqlqr)


*/
/*

-------- 15 ----------

Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo: A, B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.
a. Para verificar se os lados fornecidos formam um triângulo: A <
B + C e B < A + C e C < A + B.
b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);
c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);
d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C);
*/

/*
-------- 16 ----------

16. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).
*/

/*
-------- 17 ----------

17. Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular
e escrever o percentual que cada um representa em relação ao
total de eleitores. O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados (brancos, nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos, nulos e válidos não seja maior que o
número total de eleitores.
*/


/*
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }

}

*/