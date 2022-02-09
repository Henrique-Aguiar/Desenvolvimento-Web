function precoDoConvenio(idade) {
    if (idade < 10) {
        return 180
    }else if (idade < 30) {
        return 150
    }else if (idade < 60) {
        return 195
    }else {
        return 230
    }
}

console.log(precoDoConvenio(9))
console.log(precoDoConvenio(22))
console.log(precoDoConvenio(45))
console.log(precoDoConvenio(78))