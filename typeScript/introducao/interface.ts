function soma(a: number, b: number) {
    return a + b
}

interface IAnimal {
    nome: string
    tipo: 'terrestre' | 'aquático'
    executarRugido(alturaEmDecibeis: number): void
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean
}

const animal : IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}db`)
}

animal.executarRugido(3)

const felino: IFelino = {
    nome: 'leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}db`)
}

// condicionais apartir de parãmetros

interface IUsuario {
    id: string
    email: string
    cargo?: 'gerente' | 'coordenador' | 'supervisor'
}

// interface IAdmin extends IUsuario {
//     cargo: 'gerente' | 'coordenador' | 'supervisor'
// }

function redirecionar(usuario: IUsuario) {
    if(usuario.cargo) {
        //redirecionar para a area de administração
    }

    // redirecionar para área de usuário
}