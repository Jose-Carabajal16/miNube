import express from 'express';
import { heroes } from './data/heroes.js';

const PORT = 8082;
const app = express();

app.get("/", (req, res) => {
    res.send("Home page")
})
app.get("/saludo/:nombre", (req, res) => {
    let {nombre} = req.params
    let saludo = `Hola, ${nombre}`
    res.send(saludo)
})
app.get("/saludo/:nombre/:apellido", (req, res) => {
    let {nombre, apellido} = req.params
    let saludo = `Hola, ${nombre} ${apellido}`
    res.send(saludo)
})
app.get("/heroes/:id", (req, res) => {
    let {id} = req.params
    let heroe = heroes.find(h => h.id == id)//el + trata de transformar el formato en un numero
    res.send(heroe)
})
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));