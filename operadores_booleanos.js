//operadores booleanos

const numero = 10;

console.log(numero == 10) //  ==  compara se é igual
console.log(numero > 20)  // > maior que
console.log(numero == '10') // msm sendo string o js entende como numeral, nao texto
console.log(numero === '10') // === compara valor e tipo de variavel

console.clear()  //limpa o terminal

console.log(10 != 10) // != verifica se é diferente
console.log(10 != '10') // != verifica se é diferente
console.log(10 !== 10) // !== verifica o tipo e valor

//conjunção logica

// and => &&

let idade = 26;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log('posso dirigir? ', possoDirigir)

// OR => ||     =   OU 

idade = 40;

const votoFacultativo = idade < 18 || idade >= 70

// NOT => !

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso)


