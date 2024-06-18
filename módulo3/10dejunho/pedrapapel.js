let opcoes = ['pedra', 'papel', 'tesoura']
let escolhacomputador = ''
let escolhausuario
let resultado

console.log("escolha pedra, papel ou tesoura")
process.stdin.once('data', function (data) {
    escolhausuario = data.toString().trim()
    processamento()
    process.exit()
})

function processamento() {
    
    escolhacomputador = opcoes[Math.floor(Math.random() * opcoes.length ) ]
    
     if (escolhausuario == escolhacomputador) {

        resultado = 'empate'
    } else if (escolhausuario == 'pedra' && escolhacomputador == 'tesoura' || escolhausuario == 'papel' && escolhacomputador == 'pedra'  || escolhausuario == 'tesoura' && escolhacomputador == 'papel') {
       
        resultado = 'voce venceu'
    } else {

        resultado = 'voce perdeu'
    }
    console.log(escolhacomputador)
    console.log(resultado)
}