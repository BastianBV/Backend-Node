/**
 * Construir una funcion que separ elos nombre  largos de los cortos 
 * un nombre largo es aquel que separe los 4  caracteres de longitud 
 * 
 * input :["Rodolfo"...]
 * Output: const[nombresCortos, nombresLargos]=funcion(nombres)
 * 
 */

// const separateNames = (names) => {
  //   const largerNames = []
//   const shortedNames = []

//   names.forEach((name) => {
  //     if(name.length < 4){
    //       shortedNames.push(name)
    //     }else {
      //       largerNames.push(name)
      //     }
//   })
//   return [shortedNames, largerNames]
// }

// const [shortedNames, largerNames] = separateNames(nombres)

// console.log("nombresCortos", shortedNames)
// console.log("nombresLargos", largerNames)


//   Hacer una funcion que se llame transformarNombres reciba como parametro un array de nombres y regresar un objeto de objetos que contenga el nombre, el length del nombre y si es mayor a 4 o no
// Input: ["Ale", "Mariana", "Adrian"]...
// Output:
// {
  // 	0: {
    // 		name: "Ale", -> string
    // 		length: 3, -> numero
    // 		isGreaterThanFour: true -> booleano
    // 	}
    // }
    
    // usar Reduce  -> cambia los datos 
    
  //   const nombres = [
  //      "Rodolfo",
  //      "Araceli",
  //      "Brisa",
  //      "Eduardo",
  //      "Gio",
  //      "Jose",
  //      "Luis",
  //      "Marco",
  //      "Mariana",
  //      "Pete",
  //      "Sebastian",
  //      "Sofia"
  //    ]
  //   const transformarNombres = (names) => {
  //   let result = {}
  //   names.forEach((acc, cv, i) =>{
  //     return result[i] = {
  //       name : cv,
  //       length : cv.length,
  //       isGreaterThanFour : `${ cv.length > 3 ? true : false}`
  //     }
  //   },'')
  //   return result
  // }
  // const transformarNombres = transformarNombres (nombres)
  // console.log('transformarNombres', transformarNombres)

  let colors = require('colors');
  const arcoiris = (texto) =>{
    return texto.rainbow
  }
  console.log(arcoiris(process.argv[2])); 