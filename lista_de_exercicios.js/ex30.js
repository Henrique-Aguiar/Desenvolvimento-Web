function maiorEMenor(vetorInteiro) {
    let menor = 0
    let maior = 0
    for (let i = 0; i < vetorInteiro.length; i++) {
        if (i == 0 ) {
            maior = menor = vetorInteiro[i]
        }else {
            if (vetorInteiro[i] > maior) {
                maior = vetorInteiro[i]
            }else if (vetorInteiro[i] < menor) {
                menor = vetorInteiro[i]
            }
        }
    }
    return `${maior} é o maior e ${menor} é o menor.`
}

vetor = [1, 3, 2, 5, 6, 7, 9]
console.log(maiorEMenor(vetor))