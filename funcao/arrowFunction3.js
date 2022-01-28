let comparandoComThis = function(param) {
    console.log(this === param)
}

comparandoComThis(global)

const obj = {}
comparandoComThis = comparandoComThis.bind(obj)
comparandoComThis(global)
comparandoComThis(obj) 

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

