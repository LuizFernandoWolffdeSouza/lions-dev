let nome
let idade
let resposta
let felizaniversario
const data = 2024
console.log(' Qual o Seu nome?')
process.stadin.once('data', function (data) {
    nome = data.toString().trim()


    console.log('Qual a sua idade?')
    process.stadin.once('data', function (data) {
        idade = data.parseint(data.toString().trim())

        console.log("Fez aniversário esse ano??")
        process.stadin.once('data', function (data) {
            resposta = data.toString().trim()
            processamento(nome, idade, resposta)
            process.exit()

        })
    })
})
function processamento(nome, idade, resposta) {
    let anonascimento = data - idade

    if (resposta == "sim") {
        felizaniversario = true
    }
    else {
        felizaniversario = false
    }
    if (felizaniversario) {
        console.log(`você nasceu em ${anonascimento}`)
    }
    else {
        console.log(`você nasceu em ${anonascimento}`)

    }
}


