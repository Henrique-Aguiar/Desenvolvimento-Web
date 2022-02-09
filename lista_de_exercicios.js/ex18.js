function numeroPorExtenso(numero) {
    switch(numero) {
        case 0:
            return 'zero'
        case 1:
            return 'um'
        case 2:
            return 'dois'
        case 3:
            return 'três'
        case 4:
            return 'quatro'
        case 5:
            return 'cico'
        case 6:
            return 'seis'
        case 7:
            return 'sete'
        case 8:
            return 'oito'
        case 9:
            return 'nove'
        case 10:
            return 'dez'
        default:
            return 'Número fora do intervalo'
    }
}

console.log(numeroPorExtenso(0))
console.log(numeroPorExtenso(5))
console.log(numeroPorExtenso(9))
console.log(numeroPorExtenso(10))