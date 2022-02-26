function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        }else {
            resolve(aleatorio)
        }
    })
}
 
async function gerarMegaSena(qtdeNumeros, tentaivas) {
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if (tentaivas > 5) {
            throw "Que chato!!!"
        }else {
            return gerarMegaSena(qtdeNumeros, tentaivas + 1)
        }
    }
}

gerarMegaSena(12)
    .then(console.log)
    .catch(console.log)