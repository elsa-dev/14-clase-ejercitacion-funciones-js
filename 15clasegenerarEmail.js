const generarEmail = (usuario, dominio) => {
    return `${usuario}@${dominio}`

}

console.log(generarEmail('adalovelace', 'gmail'))
console.log(generarEmail('maria_del_valle', 'hotmail'))
console.log(generarEmail('titi_garcia', 'fibertel'))