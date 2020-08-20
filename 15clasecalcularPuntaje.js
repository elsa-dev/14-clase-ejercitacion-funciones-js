
const calcularPuntaje = (facil, normal, dificil) => {
    return facil * 3 + normal * 5 + dificil * 10 
}

console.log(calcularPuntaje(3,0,0))
console.log(calcularPuntaje(0,2,1))
console.log(calcularPuntaje(5,1,2))