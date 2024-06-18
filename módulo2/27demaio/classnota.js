let nota

console.log("Digite a sua nota")
process.stdin.once('data', function (data) {
    nota = Number(data.toString().trim())
    processo(nota)
    console.log("Digite a sua nota")
    classificar(nota)
    console.log('sua classificação é ' + processo(nota))
    process.exit()

})
function processo(nota) {
    switch (true) {
        case (nota >= 90 && nota <= 100):

            return "A"
        case (nota >= 80 && nota <= 89):

            return "B"

        case (nota >= 70 && nota <= 79):
            return "C"

        case (nota >= 60 && nota <= 69):
            return "D"

        case (nota >= 0 && nota <= 59):
            return " Sua nota é invalida"


        default:
            break;
    }


}
function classificar(nota) {
    let notaclassificado = processo(nota)
    if (notaclassificado == "A") {
        console.log(`Parábens, você  foi aprovado  e sua nota é ${nota}`)
    } else if (notaclassificado == "B") {
        console.log(`Parábens, você  foi aprovado  e sua nota é ${nota}`)

    } else if (notaclassificado == "C") {
        console.log(`Parábens, você  foi aprovado  e sua nota é ${nota}`)

    }
    else if (notaclassificado == "D") {
        console.log(`você  foi reprovado  e sua nota é ${nota}`)

    }
    else if (notaclassificado == "F") {
        console.log(`você  foi reprovado  e sua nota é ${nota}`)

    }
}

