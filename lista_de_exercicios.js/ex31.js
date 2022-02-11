function numNegativos(vetorNumeros) {
    let quantNegativos = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] < 0 ) {
            quantNegativos++
        }
    }
    console.log(`A ${quantNegativos} números negativos`)
}

vetor = [-3, 4, -9, 1, -4, 2, 4, -8]
numNegativos(vetor)