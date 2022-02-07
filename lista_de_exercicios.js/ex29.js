function intervaloDe10a20(vetorNumeros) {
    quantDentro = 0
    quantFora = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20) {
            quantDentro++
        }else {
            quantFora++
        }
    }
    console.log(`${quantDentro} números dentro do intervalo e ${quantFora} fora.`)
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
intervaloDe10a20(vetor)