var coresfavorita = ['preto','azul','verde']
var coresespeciais =[]
var cordousuario

console.log("Escreva sua cor favorita")
process.stdin.once('data', function (data) {
    cordousuario= data.toString().trim()
    processo(cordousuario)
    process.exit()
})

function processo(cordousuario) {
    let cor = coresfavorita.includes(cordousuario)
    if (cor == true) {
        console.log(`A sua cor é uma das mais favoritas da turma ${cordousuario}`)
        
    } else {
        console.log(`A sua cor é diferente e vamos adicionar`)
        coresespeciais.push(cordousuario)
        console.log(coresespeciais)
        
        

    }
    console.log(`cores favoritas:${coresfavorita} ${coresespeciais}`)
    console.log(`Tem ${coresfavorita.length} coresfavoritas`)


    
}


