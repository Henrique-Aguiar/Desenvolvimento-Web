Array.prototype.forEach2 = function(funcao) {
    for (let i = 0; i < this.length; i++) {
        funcao(this[i], i, this)
    }
}


const aprovado = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovado.forEach2( function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})