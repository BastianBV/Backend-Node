const fs = require("fs")
console.log ("fs write", fs.write)

fs.writeFile("text1.text", "Archivo creado desdenode", "utf8", (err) => {
    if(err) {
        console.log ("err", err)
        return //salte 
    }
    console.log("El archivo fue creado con exito")
})