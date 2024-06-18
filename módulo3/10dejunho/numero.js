const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let maximotentativas = 10
let tentativas = 0
let palpite = Math.floor(Math.random() * 100) + 1

console.log('Bem vindo ao jogo')
palpitecontinuar()

function palpitecontinuar() {
    tentativas++
    if (tentativas <= maximotentativas) {
        rl.question("Digite um número: ", (resposta) => {
            if (palpite > resposta) {
                console.log("É muito baixo")
                palpitecontinuar()

            } else if (palpite < resposta) {
                console.log("É muito alto")
                palpitecontinuar()

            } else {
                console.log(`Parábens, você acertou em ${tentativas} . `)
                rl.close()
            }

        })
    }

}











/*if (resposta .trim().toLowerCase() === Number) {
       
       console.log("Vamos proceder" + sorteio)
       perguntarcontinuar()
   } else{
       console.log("Programa encerrado")
       rl.close()
   }*/