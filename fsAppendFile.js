//^ Actualizar datos 

const fs = require ("fs")
console.log("fs", fs.appendFile)


fs.appendFile("text1.txt", "Esto es NUEVO", "utf8", (err)=>{
    if(err) {
        console.log("err", err)
        return
    }
    console.log("Tu archivo fue actualizado con exito")
})