// coercao (conversao) de tipos

// 1. coerção Explicita (Manual)
const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormatoString = String(numero)   //transforma tipo numero pra string(texto)
console.log(numeroEmFormatoString, typeof numeroEmFormatoString) //typeof indica o tipo da variavel

console.log(Number('123123123')) //transforma string em numero
console.log(parseFloat('123123.123123')) //transforma em numero decimal
console.log(parseInt('123123.123123')) //transforma em numero decimal em inteiro
console.log(Boolean(1)) // 0 é false numero maior que zzero é true

console.clear()

//Coerção Implícita
//conversão automatica de tipos em situações especificas
//EVITAR

console.log('10' + 1)
console.log('10' - 1)
console.log(10 * '3')
console.log( 10 - 'asdasd')

console.clear()

let n = 1 + '1';
n = n - 1
console.log(n);

console.log(2 + 3 + 4 + '5');

console.log('5' + 2 + 3 + 4);

console.log('10' - '4' - '3' - 2 + '5');

