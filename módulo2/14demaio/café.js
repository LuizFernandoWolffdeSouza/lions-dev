

let gostadecafe = true
let resposta


console.log('Gosta de café?')
process.stdin.once('data', function (data) {
    numero = toString().trim()
    café(resposta)
    process.exit()
})



function café(resposta) {
    if (resposta == 'sim') {
        gostadecafe = true

    } else {
        gostadecafe = false

    }
    if (gostadecafe == true) {
        console.log("Que bom que você gostá de café")
    } else {
        gostadecafe = false
        console.log("Que bom que você gostá de café")

    }
}

