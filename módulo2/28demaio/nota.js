let nota = [27, 50, 30, 40, 20, 65, 85, 90, 41, 50]
let soma = 0
let notaAlta = nota[0]
let notaBaixa = nota[0]
var alta = 0
let abaixo = 0
var mostra =0

// 1-media aritmética
for (let i = 0; i < nota.length; i++) {

    soma = soma + nota[i]
}
var media = (soma / nota.length)
console.log(media)

// 2-Nota alta e nota baixa
for (let i = 0; i < nota.length; i++) {
    if (nota[i] > notaAlta) {
        notaAlta = nota[i]
    }
    else if (nota[i] < notaBaixa) {
        notaBaixa = nota[i]

    }
   

}
console.log(`${notaAlta} ${notaBaixa} `)
//3- conte e exibir as nota altas e baixas


for (let i = 0; i < nota.length; i++) {
    if (nota[i-1] >= media) {
        var mostra = mostra + 1
        
    }
    
    
}
console.log( `Nota exibida ${mostra}`)

//4- Adicionar nota alta e baixa


nota.push(60)
console.log(nota)

//5. Conte e exiba quantas notas são consideradas reprovadas (abaixo

for (let i = 0; i < nota.length; i++) {
    if (nota[i] < 0) {
        baixa++

    }
    
}
console.log(baixa)