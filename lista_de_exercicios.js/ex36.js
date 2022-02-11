function multiplicacao(vetorInt, numero) {
    const resultado = []
    vetorInt.forEach(elemento => {
        resultado.push(elemento * numero)
    });
    //or (let i  = 0; i < vetorInt.length; i++) {
    //   resultado.push(vetorInt[i] * numero)
    //}
    return resultado
}

vetor = [3, 4, 5, 8, 9]
console.log(multiplicacao(vetor, 2))