function impares(inicio = 0, fim = 100) {
    if (inicio < fim) {
        for (let i = inicio; i < fim; i++) {
            if (i % 2 != 0) {
                console.log(i)
            }
        }
    }else {
        for (let i = fim; i < inicio; i++) {
            if (i % 2 != 0) {
                console.log(i)
            }
        }
    }
}

impares(0, 100)
impares(100, 0)
