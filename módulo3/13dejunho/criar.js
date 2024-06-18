const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout

})
function entrar() {
    console.log("Digite o seu nome Para continuar")
    rl.question('Digite o seu nome', (resposta) => {
        if (resposta.toString().trim().toLowerCase() != "") {
            console.log("Bem vindo ao menu de menu de medidas")
        } else {
            console.log("Por favor, digite o seu nome corretamente")
            rl.close()
        }

    })

}
menu()



let antropómetrico = []

function menu() {
    console.log(`Menu de opções
    1.Tira medidas antropómetricas
    2. Listar medidas antropómetricas
    3. calcular macros
    4. exibir macros
    5. sair `)
    rl.question(`Escolha uma das opções abaixo`, (resposta) => {
        switch (resposta) {
            case '1':
                medidaantropometrica()
                break
            case '2':
                listantropometrica()
                break
            case '3':
                calculomacro()

                break
            case '4':
                exibirmacros()
                break
            case '5':
                rl.close()
                break

            default:
                menu()
                break;
        }
    })

}
function medidaantropometrica() {
    rl.question(`Digite a sua idade`, (idade) => {
        rl.question('Digite o seu peso', (peso) => {
            rl.question('Digite a sua altura', (altura) => {
                //calculoimc = peso / (altura * altura)
                console.log("Esses são os seus dados"), antropómetrico.push({ idade: idade, peso: peso, altura: altura })
                menu()
            })
        })
    })

}
function listantropometrica() {
    if (antropómetrico.length == 0) {
        console.log("nenhum  dado encontrado")
    }
    else {

        for (let i = 0; i < antropómetrico.length; i++) {
            console.log(`A sua idade é${antropómetrico[i].idade}`)
            console.log(`O seu peso é ${antropómetrico[i].peso}`)
            console.log(`A sua altura ${antropómetrico[i].altura}`)
        }
    }
    exibirMenu()
}

