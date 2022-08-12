//^ Eliminar un archivo

const fs = require("fs")

fs.unlink("text1.txt", (err)=>{
    if (err) {
        console.log("no pudo eliminar", err)
        return
    }
    console.log("text1.txt ha sido eliminado" )
})