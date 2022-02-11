vetorInteiro = [2, 3, 5, 7]
vetorString = ['ana', 'henrique', 'jp', 'ze']
vetorDouble = [1.2, 3.2, 4.4, 5.2]

const total = vetorInteiro.concat(vetorString, vetorDouble)
console.log(total)

console.log([].concat(vetorInteiro, vetorString, vetorDouble))
