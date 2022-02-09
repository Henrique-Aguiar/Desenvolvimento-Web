function anoBissexto(ano) {
    if (ano % 400 == 0) {
        return true
    }if (ano % 100 == 0) {
        return false
    }if (ano % 4 == 0) {
        return true
    }
}

console.log(anoBissexto(1600))
console.log(anoBissexto(1900))
console.log(anoBissexto(2024))
