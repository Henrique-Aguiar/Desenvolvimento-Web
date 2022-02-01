function triangulo(valor1, valor2, valor3) {
    if (valor1 == valor2 && valor1 == valor3) {
        console.log('Triângulo Equilátero')
    }else if(valor1 == valor2 || valor1 == valor3 || valor2 == valor3){
        console.log('Triângulo Isósceles')
    }else {
        console.log('Triângulo Escaleno')
    }
}

triangulo(3, 3, 3)
triangulo(3, 4, 3)
triangulo(1, 2, 3)
