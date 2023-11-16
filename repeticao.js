// laços de repetição

const input = require('readline-sync')

const numero_sorteado = 5;

// number = transforma string em numero
// question abre caixa de dialogo pro usuario
let numero = Number(input.question('Qual numero voce escolhe? '))

// if (numero === numero_sorteado) {
//   console.log('Você acertou!!')
// } else {
//   console.log('Você errou!!')
// }

while (numero !== numero_sorteado) {
  console.log('Você errou o numero. Tente novamente...')

  numero = Number(input.question('Qual numero voce escolhe? '))
}

console.log('Você acertou!!!')