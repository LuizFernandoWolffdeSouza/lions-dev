let nota1
let nota2


console.log('Qual a sua nota 1 ?')
process.stdin.once('data', function (data) {
    nota1 = Number(data.toString().trim())
    console.log('Qual a sua nota 2?')

    process.stdin.once('data', function (data) {
        nota2 = Number(data.toString().trim())
        processo(nota1, nota2)
        process.exit()
    })
})
function processo(nota1, nota2) {
    var calculo = (nota1 + nota2) / 2
    
    if (calculo < 6) {
        console.log(`Que pena você ficou de recuperação ${calculo}`)


    } else {

        console.log(`Você passou e sua nota é ${calculo}`)


    }

}

