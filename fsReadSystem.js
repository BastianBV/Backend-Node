//^ Leer contenido de archivos 

const fs = require ("fs")
console.log("fs", fs.readFile )

fs.readFile("text1.txt", "utf8", (err, data)=>{
    // if(data) throw err; 
    //     console.log("data", data);
    if (err){
        console.log("error", err)
    }else {
        console.log("data", data)
    }
})