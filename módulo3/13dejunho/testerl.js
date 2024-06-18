const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
function retornar() {
    console.log("Digite o seu nome")
    rl.question('Digite o seu nome', (resposta) => {
        console.log(`Bem vindo ${resposta}`)
        if (resposta != "") {
            console.log("Vamos continuar")
            retornar()

        } else if (resposta == 0) {
            console.log("Seja mais claro")
            rl.close()

        }
    })

}
retornar()


