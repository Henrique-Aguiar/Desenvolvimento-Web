function revendaCarro(carro) {
    switch(carro) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            return 'Tem certeza que prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel por aqui'
    }
}

console.log(revendaCarro('hatch'))
console.log(revendaCarro('motocicletas'))
console.log(revendaCarro('jeep'))