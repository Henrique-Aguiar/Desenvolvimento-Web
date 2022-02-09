function jurosSimples(capInicial, taxa, tempo) {
    const juros = capInicial * taxa * tempo
    return capInicial + juros
}

function jurosComposto(capInicial, taxa, tempo) {
    return capInicial * (1 + taxa) ** tempo
   
}

console.log(jurosSimples(1000, 0.02, 5))
console.log(jurosComposto(1000, 0.05, 5))
