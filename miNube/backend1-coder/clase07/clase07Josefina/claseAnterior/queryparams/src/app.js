const express = require('express');
const { heroes } = require('./data/heroes');
const PORT = 8083

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');

})
app.get("/saludo", (req, res) => {
    console.log(req.query)
    let {nombre, despedida} = req.query
    if(!nombre){
        return res.send("Complete el nombre")
    }
    let saludo = `${despedida ? "Chau!": "Hola"}, ${nombre}`
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(saludo);

})

app.get("/heroes", (req, res) => {
    let {limit} = req.query
    if(limit){
        limit = Number(limit)
        if(isNaN(limit)){
            return res.send("El argumento limit tiene que ser numerico")
        }
    } else{
        limit = heroes.length
    }
    let resultado = heroes.slice(0, limit)
    res.send(resultado)
})
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})