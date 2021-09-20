//ARROW AND FUNCTIONS

let multiplicar = (a, b) => a * b

console.log(multiplicar(2, 7))

function multiplicar1(a, b) {
  return a * b
}

//--------
let msg = () => console.log('olá, mundo')
let msg1 = adjetivo => console.log(`olá, mundo ${adjetivo}`)

msg()
msg1('crazy')

//--------
let par = num => num % 2 == 0

console.log(par(15))

//---------
let multiplo = (a, b) => {
  let resto = a % b
  return resto == 0
}
console.log(multiplo(10, 5))

//---------
let horaAtual = () => {
  let hora = new Date()

  return hora.getHours + ':' + hora.getMinutes() + ' do dia ' + hora.getDate()
}

console.log(horaAtual())

//CALLBACKS

let soma = (numeroA, numeroB) => numeroA + numeroB

let mediaDeDoisNumeros = (numeroA, numeroB, funcao) =>
  funcao(numeroA, numeroB) / 2

console.log(mediaDeDoisNumeros(20, 35, soma))

//FATORIAL (MESA DE TRABALHO)

let fatorial = numero => {
    let fat = 1
    for (let i = numero; i >= 1; i--) {
      fat *= i
    }
    return fat
  }
  
  console.log(fatorial(10))
  
  let fatRecursivo = num => {
    if (num <= 1) return 1
    return num * fatRecursivo(num - 1)
  }
  
  console.log(fatRecursivo(5))


//MESA FIZZ BUZZ

let readline = require('readline-sync')
/* import { question } from 'readline-sync' */

let multiploA = readline.question('Como devo chamar o primeiro multiplo?')
let multiploB = readline.question('Como devo chamar o segundo multiplo?')
let numA = readline.question('digite primeiro numero: ')
let numB = readline.question('digite segundo numero: ')

let digitalHouse = (a, b) => {
  for (let i = 1; i <= 100; i++) {
    if (i % a == 0 && i % b == 0) {
      console.log(multiploA + ' ' + multiploB)
    } else if (i % a == 0) {
      console.log(multiploA)
    } else if (i % b == 0) {
      console.log(multiploB)
    } else {
      console.log(i)
    }
  }
}

digitalHouse(numA, numB)

//MICROD-CALLBACKS

/* function acaoCarro(funcao) {
  return funcao
} */

let acaoCarro = funcao => funcao

let andar = () => console.log('O carro está andando.')
let parar = () => console.log('O carro parou! ')

console.log(acaoCarro(andar))