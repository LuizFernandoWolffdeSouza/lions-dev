
//7- Calcular notas do alunos

let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let soma = 0
let max = notas[0]
let min = notas[0]
let reprova6 = 0
let media6 = []
let media
//A) imprimir média das notas

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]

}
media = soma / notas.length
console.log("A média das notas é " + media.toFixed(2))
//B) Nota máxima e nota mínima
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > max) {
        max = notas[i]

    } else if (notas[i] <= min) {
        min = notas[i]

    }
}
console.log("A nota máxima é " + max)
console.log("A nota minima é " + min)
//C) Notas acima da média geral(6)
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > 6) {
        media6.push(notas[i])
    }
}
console.log("O número de notas acima da média é " + media6)
//D- Adicionar nova nota ao array
notas.push(35)
console.log(`${notas}`)
//E - Considerar reprovado abaixo de 6
for (let i = 0; i < notas.length; i++) {
    if (notas[i] <= 6) {
        reprova++
    }
}
let caco = notas.length
console.log("As notas abaixo de 6 são "+ reprova)















/*for (let i = 0; i < array.length; i++) {
    
    
}*/