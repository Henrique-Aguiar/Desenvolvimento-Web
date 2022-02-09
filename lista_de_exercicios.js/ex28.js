function parImpares(vetorNumeros) {
    let quantImpar = 0
    let quantPar = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            quantPar++
        }else {
            quantImpar++
        }
    }
    console.log(`${quantPar} números pares e ${quantImpar} números ímpares`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
parImpares(vetor)