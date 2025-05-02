const numeros = [1,2,3,4,5,6,7,8,9]


console.log(numeros)


console.log(numeros[numeros.indexOf(8)])

const meses = ['Enero', 'Febrero', 'Marzo','Abril']

console.table(meses)

for(let i=0;i<meses.length; i++){
    console.log(meses[i])
}

meses.push('Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre')

console.table(meses)

for(let i=0;i<meses.length; i++){
    console.log(meses[i])
}

numeros.splice(2,1)

console.log(numeros)