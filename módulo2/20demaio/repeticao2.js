let somaPar = 0
let somaImpar = 0
let totalPar = 0
let totalImpar = 0
let mediaPar = 0
let mediaImpar = 0

for (let i = 0; i <= 999; i++) {
    if (i % 2 == 0) {
        totalPar++
        somaPar = somaPar + i



    }
    else {
        totalImpar++
        somaImpar = somaImpar + 1
    }


}
mediaPar = somaPar / totalPar
mediaImpar = somaImpar / totalImpar
console.log(`A soma dos pares é ${somaPar}`)

console.log(`A soma dos impares é ${somaImpar}`)
console.log(`o total de pares é ${totalPar}`)
console.log(`O total de impares é ${totalImpar}`)
console.log(`E a media par é ${mediaPar}`)
console.log(`E a media impar é ${mediaImpar}`)
