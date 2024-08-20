import express from 'express';
import ProductManager from './productManager.js'; // Importamos la clase ProductManager


const app = express();
const productManager = new ProductManager('./src/data/products.json'); // Instanciamos la clase con la ruta al archivo de productos

// Endpoint para obtener todos los productos
app.get('/products', async (req, res) => {
    const products = await productManager.getProducts();
    res.json(products);
});

// Endpoint para obtener un producto por su ID
app.get('/products/:pid', async (req, res) => {
    const product = await productManager.getProductById(parseInt(req.params.pid));
    if (product) {
        res.json(product);
    } else {
        res.status(404).send({ error: "Producto no encontrado" });
    }
});

const PORT = 8085;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
