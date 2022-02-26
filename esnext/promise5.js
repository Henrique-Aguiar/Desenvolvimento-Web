function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log()
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            }else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`ERRO ESP: ${err}`)
        )
    .catch(err => console.log(`ERRO GERAL: ${err}`))
    .then(() => console.log('Fim!'))