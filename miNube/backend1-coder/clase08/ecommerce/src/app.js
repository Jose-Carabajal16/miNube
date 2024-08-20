import express from 'express';
import productsRouter from './routes/productsRouter.js';
import cartRouter from './routes/cartRouter.js'
const PORT = 8088;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//ruta de los productos
app.use("/api/products", productsRouter)
// ruta de los carritos
app.use("/api/carts", cartRouter)
// ruta para la página de inicio
app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send("Bienvenido a la Home");
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});