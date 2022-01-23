const valores = [8.4, 3.4, 7, 4.3]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:12}, false, null, 'teste')
console.log(valores)