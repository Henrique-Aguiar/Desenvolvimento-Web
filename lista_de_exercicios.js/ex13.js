function diasSemana(dia) {
    switch (dia) {
        case 7: 
            console.log('Final de semana')
            break
        case 6:
        case 5:
        case 4:    
        case 3:
        case 2:
            console.log('Dia útil')
            break
        case 1:
            console.log('Final de semana')
            break
        default:
            console.log('Dia invalido')
    }
}

diasSemana(1)
diasSemana(4)
diasSemana(9)
diasSemana(7)