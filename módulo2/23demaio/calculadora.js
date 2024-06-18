/* function somar(valor1, valor2) {
    let somar = valor1 + valor2
    return somar
}
function subtrair(valor1, valor2) {
    let subtrair = valor1 - valor2
    return subtrair
}
function divisao(valor1, valor2) {
    let divisao = valor1 / valor2
    return divisao
}
function multi(valor1, valor2) {
    let multi = valor1 * valor2
    return multi
}

console.log(somar(5,3 ))
console.log(subtrair(5,3 ))
console.log(divisao(5,3 ))
console.log(multi(5,3 )) */


function calculadora(valor1, valor2, operador) {
    if (operador == "+") {
        resultado = valor1 + valor2
        return resultado

    }
    if (operador == "-") {
        resultado = valor1 - valor2
        return resultado

    }
    if (operador == "/") {
        resultado = valor1 / valor2
        return resultado

    }
    if (operador == "*") {
        resultado = valor1 * valor2
        return resultado

    }
}







function calculadora(valor1,valor2, operador) {
    

switch (operador) {
    case "+":
        resultado = valor1 + valor2
        return resultado
       
        break;
    case "-":
        resultado = valor1 - valor2
        return resultado
        

        break;
    case "/":
        resultado = valor1 / valor2
        return resultado
        

        break;
    case "*":
        resultado = valor1 * valor2
        return resultado
        

        break;

    default:
        break;
        
}
}
let conta = calculadora(100, 100, "/")
console.log(conta)