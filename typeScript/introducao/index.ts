const input = document.getElementById('input')as HTMLInputElement

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement
    console.log(i.value)
})

// generic types

function adicionarApendiceLista<T>(array: any[], valor: T) {
    return array.map(item => item + valor)
}

console.log(adicionarApendiceLista([1, 2, 3], 'f'))