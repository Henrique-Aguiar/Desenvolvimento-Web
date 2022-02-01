function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota +(5 - (nota % 5))
    }else {
        return nota
    }
}

function sistemaNotas(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`)
    }else {
        console.log(`Reprovado com nota ${notaCorrigida}`)
    }
}

sistemaNotas(100)
sistemaNotas(48)
sistemaNotas(57)
sistemaNotas(37)
