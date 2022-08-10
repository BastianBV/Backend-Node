

console.log(process.argv[2])

// Ejercicio =  Hacer una funcion que reciba un nombre del process.arg y si existe que me imprima "Bienvenido y el nombre"
// si NO , imprimir "Afuera de aqui"


// let welcome = (name) => {
//     if(name != undefined) {
//         console.log(`Bienvenido ${name}`)
//         return `Bienvenido`
//     } else {
//         console.log('Afuera de aqui')
//     }
// }
// result = welcome(process.argv[2])
// console.log(result + 'Bastian')

const nombre = process.argv[2]

const printName = (nombre) => {
    if(nombre){
        console.log(`Bienvenido ${nombre}`)
        return 
    }
        console.log('Afuera de aqui')
   
}
printName(nombre)

