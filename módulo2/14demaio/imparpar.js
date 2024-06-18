let numero 


console.log('digite aqui um número')
process.stdin.once('data', function(data){
    numero = toString().trim()
    processamento (numero)
    process.exit()
})
    

 function processamento(numero) {
    if (numero % 2 == 0) {
        console.log("O numero é par")
    }
    else if ( numero % 2 == 0){
        console.log ('O numero é impar')
    
    }
    else {
        console.log("É impar")
    }

 } 