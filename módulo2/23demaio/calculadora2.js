function calculadora(valor1,valor2, operador) {
    

    switch (operador) {
        case "+":
            resultado = valor1 + valor2
            return resultado
           
            break
        case "-":
            resultado = valor1 - valor2
            return resultado
            
    
            break
        case "/":
            resultado = valor1 / valor2
            return resultado
            
    
            break
        case "*":
            resultado = valor1 * valor2
            return resultado
            
    
            break
    
        default:
            break;
            
    }
    }
    let conta = calculadora(135, 50, "+")
    console.log(conta)