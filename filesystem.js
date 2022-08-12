//^ Escribir dentro de un documento y/o crear documento

const fs = require("fs")
// console.log ("fs write", fs.write)

// fs.writeFile("text1.txt", "Archivo creado desdenode", "utf8", (err) => {
//     if(err) {
//         console.log ("err", err)
//         return //salte 
//     }
//     console.log("El archivo fue creado con exito")
// })

//~ Asicronidad -> Cuando varias se estan haciendo al mismo tiempo, y la que sale primero esa va
//! Async
// fs.readdir("directorio1", "utf8", (err,files)=>{
//     if(err) throw err
//     console.log(files)
// })

//~ Sicronidad -> Que se esta haciendo una cosa despues de otra 
//! Sync
// const files = fs.readdirFileSync("directorio1", "utf8", (err, files)=>{
//     if(err) throw err 
// console.log("files", files)
// })




/** 
* Ejercicio 2
* Con callbacks
* 1 - Leer los archivos de un directorio y eliminarlos.
* - Tienen que validar que tenga archivos, si no imprimir un console.log de no hay archivos
*/


fs.readdir("directorio1", "utf-8", (err, files)=>{
    if (err) throw err;
        console.log(files)

        if(files.length ===0 ){
            console.log("No hay archivos")
            return
        }
    files.forEach(cv =>{
        fs.unlink(`directorio1/${cv}`, (err)=>{

            if (!err) {
                console.log("archivos eliminados")
            }else
            console.log(err)
        })
    });
})


/**
 * Hacer una carpeta dentro de otra
 * Y eliminar el contenido de toda la carpeta de adentro
 * En pseudo-codigo
 * readdir -> leer directorio
 * rmdir -> eliminar directoio
 * unlink -> eliminar un archivo
 * fs.statSync(path[, options]) -> para ver los stats de un archivo o directorio 
 * (tip: para ver si algo es directorio)
 */

/**
 * 1- Leer el contenido de la carpeta
 * 2- Ciclar el contenido que recibimos 
 * CICLO:
 *      1 - Checar si es una carpeta o no
 *          SI es Carpeta:
 *                  Volver a leer el contenido la carpeta
 *                  Si esta vacio: 
 *                      imprimir que esta vacio
 *                  Si no:
 *                      Checar si es una carpeta o no
 *              SI NO:
 *                  Eliminar archivo
 */