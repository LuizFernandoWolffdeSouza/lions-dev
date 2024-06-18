const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function perguntarContinuacao() {
    rl.question('Você quer continuar? (sim/não): ', (resposta) => {
        console.log(`Você digitou: ${resposta}`)

        if (resposta.trim().toLowerCase() === 'sim') {
            console.log('Vamos continuar!')
            perguntarContinuacao()
        } else {
            console.log('Programa encerrado.')
            rl.close()
        }
    })
}

perguntarContinuacao()
