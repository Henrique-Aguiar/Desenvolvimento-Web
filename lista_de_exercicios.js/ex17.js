function novoSalario(plano, salario) {
    switch(plano) {
        case 'A':
            console.log(salario + (salario * 10/100))
            break
        case 'B':
            console.log(salario + (salario * 15/100))
            break
        case 'C':
            console.log(salario + (salario * 20/100))
            break
        default:
            console.log('Plano inválido')
    }
}

novoSalario('A', 1000)
novoSalario('B', 1000)
novoSalario('C', 1000)
novoSalario('F', 2000)
