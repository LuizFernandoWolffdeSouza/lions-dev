 var tabuada

 console.log("Escolha uma tabuada 0 a 10")
 process.stdin.once('data', function (data) {
        tabuada = Number(data.toString().trim())
        processo(tabuada)
        process.exit()


    
 })
 function processo(tabuada) {
    for (let i = 0; i <= 10; i++) {
            console.log(` ${tabuada} x ${i}  = ${tabuada * i}`)
    
        
    }

    
 }
 