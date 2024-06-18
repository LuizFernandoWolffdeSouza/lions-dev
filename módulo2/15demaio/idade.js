let idade
let nome

console.log('qual o seu nome')
process.stdin.once('data', function (data) {
    nome = data.toString().trim()

    console.log('qual a sua idade')
    process.stdin.once('data', function (data) {
        idade = data.toString().trim()
        processamento(idade)
        process.exit()


















        

    })



})

function processamento(nome,idade) {
    if (idade >= 18) {
        console.log(`${nome}então você é maior de idade`)

    } else {
        let anosres = 18 - idade
        console.log(`Você vai ser de maior em ${anosres}`)

    }

}