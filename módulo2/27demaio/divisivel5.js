let numero 
console.log('fale o número')
process.stdin.once ('data', function (data) {
    numero = Number(data.toString(). trim())
    processo(numero)
    process.exit()

    
})
function processo(numero) {
    if (numero % 5 == 0) {
        console.log(`O número ${numero} é divísivel por 5`)
    
        
    } else {
        console.log(`O número ${numero} não é dívisivel por 5`)
        
    }
    
}
