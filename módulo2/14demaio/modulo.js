let numero
console.log('digite aqui um número')
process.stdin.once('data', function(data){
    if (numero == 0){
        console.log(`o numero digitado é ${numero}`)
        process.exit()
    } else {
        console.log("parabéns, isso nao serviu para nada")
        process.exit()
    }
})
