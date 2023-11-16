//estruturas condicionais

let idade = 20;

if (idade >= 18) {
  console.log('Você é maior de idade!')
}else {
  console.log('Você é menor de idade!')
}

//SE MEDIA >= 7, APROVADO
//SE MEDIA < 7 E MEDIA >= 5, RECUPERAÇÃO
//SE MEDIA < 5, REPROVADO

console.clear()

let media = 10;

if(media >= 7) {
  console.log('Aprovado(a)')
}else if (media >= 5) {
  console.log('Recuperação')
}else {
  console.log ('Reprovado')
}