function calcularAreaRetangulo(l, a){

    if (typeof l !== "number" || typeof a !== "number"){
        throw Error("O tipo string não é a mesma do tipo number")
    }

    return l * a
}