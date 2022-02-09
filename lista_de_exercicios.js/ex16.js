function calculadora(n1, operador, n2) {
    switch (operador){
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            return n1 / n2
        default:
            return 'Operação inválida'
    }
}
 
console.log(calculadora(5, '+', 4))
console.log(calculadora(2, '-', 2))
console.log(calculadora(2, '*', 4))
console.log(calculadora(8, '/', 2))