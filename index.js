// HTTP 
// const http = require("http")

/**
 * 1- Se crea un servidor http
 * 2- Poner a ese servidor a escuchar 
 */

// const server = http.createServer((request, response)=>{
//   const { url, method} = request 
// })









// server.listen(5050, ()=>{
//     console.log("server listening...")
// })



const express = require("express")
const { response } = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.write("Hola bienvenido al get de Home")
    response.end()
})

app.listen(5050, ()=>{
    console.log("Servidor escuchando")
})


//! Tarea hacer el CRUD con EXPRESS 
