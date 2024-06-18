var dado
console.log("Qual o número de lados do dado?")

process.stdin.once('data', function (data) {
   dado = Number(data.toString().toLowerCase())
   processamento(dado)
   process.exit()
})

function processamento(dado) {
   dado = Math.floor(Math.random() * dado) + 1
   console.log(dado)
}


































