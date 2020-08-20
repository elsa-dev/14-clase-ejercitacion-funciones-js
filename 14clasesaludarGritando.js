const obtenerNombreCompleto = (nombre, apellido) => {
    return (`${nombre} ${apellido}`)
    }



let saludar = (nombre) => {
    return `Hola ${nombre}, un gusto conocerte`
    }



const gritar = (str) => {
    return `!${str}!`
    }


const saludarGritando = (nombre, apellido) => {
    const nombreCompleto = obtenerNombreCompleto(nombre, apellido)
    const saludo = saludar(nombreCompleto)
    const grito = gritar(saludo)
    console.log(grito)
}

saludarGritando(`ada`, `lovecase`)