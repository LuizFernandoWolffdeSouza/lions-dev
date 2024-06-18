let nota1
let nota2
let notas = []

console.log('Digite a sua nota')
process.stdin.once('data', function (data) {
    nota1 = Number(data.toString().trim())

    console.log('Digite a sua nota2')
    process.stdin.once('data', function (data) {
        nota2 = Number(data.toString().trim())
        processamento(nota1, nota2)
        process.exit()
    })

})
function processamento(nota1, nota2) {

    notas.push(nota1)
    notas.push(nota2)
    let calculo = (nota1 + nota2) / 2
    console.log('Sua nota é', calculo)


}