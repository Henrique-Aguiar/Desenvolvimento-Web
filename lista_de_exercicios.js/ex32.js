function media(vetorNumero) {
    let total = 0
    for (let i = 0; i < vetorNumero.length; i++) {
        total += vetorNumero[i]
    }
    return total / vetorNumero.length
}

vetor = [5, 10, 20, 0, 3]
console.log(media(vetor))
