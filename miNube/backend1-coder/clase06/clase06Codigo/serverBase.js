//const http = require('http');
//1- primero vamos a instalar npm init -y que nos va a permitir utilizar http desde una importacion luego modifico el script del JSON con un type "modules" y luego hay instalar npm i -g nodemon
import http from "http"
import { heroes } from "./data/heroes.js"

const PORT = 8080
const app = http.createServer((req, res) => {
    // console.log(req)
    if(req.url==="/favicon.ico") return 
    console.log(req.url)

    if(req.url==="/heroes"){
        res.setHeader("Content-type", "application/json; charset=utf-8")
        return res.end(JSON.stringify(heroes, null, 5))
        
    }

    if(req.url==="/contacto"){
        res.setHeader("Content-type", "text/plain; charset=utf-8")
        return res.end("Contacto...!!!")
        
    }

    
    if(req.url==="/"){
        res.setHeader("Content-type", "text/plain; charset=utf-8")
        return res.end("Server con módulo HTTP...!!!")
        
    }

    res.setHeader("Content-type", "text/plain; charset=utf-8")
    res.end("404 | not found")
})

app.listen(PORT, () => {
    console.log(`Server online en puerto ${PORT}`)
})