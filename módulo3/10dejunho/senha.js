let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
let senha = ''
let comprimentoSenha
let numeroAleatorio

console.log('Qual o tamanho da senha?')
process.stdin.once('data', function(data){
    comprimentoSenha = Number(data.toString().trim())
    processamento()
    process. exit()

})
function processamento() {
    for (let i = 0; i < comprimentoSenha; i++) {
     numeroAleatorio = Math.floor( Math.random() * caracteres.length )
     senha  = senha + caracteres.charAt(numeroAleatorio)
    
    
    }
    console.log(senha)
    
}
