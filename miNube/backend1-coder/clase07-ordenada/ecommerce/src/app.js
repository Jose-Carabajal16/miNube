import express from 'express';
import ProductManager from './productManager.js';
const PORT = 8087;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//ProductManager con el JSON
// Instancia de ProductManager con el JSON
const productManager = new ProductManager("./src/data/products.json");

// Ruta para la página de inicio
app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send("Bienvenido a la Home");
});

// Ruta para obtener todos los productos
app.get("/api/products", async (req, res) => {
    try {
        const products = await productManager.getProduct();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({
            error: 'Error al obtener los productos'
        });
    }
});

//METODO POST → Se utiliza para enviar datos al servidor
app.post("/api/products", async (req, res) => {
    let {
        title,
        ...otros
    } = req.body //... es aqui el operador rest
    if (!title) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({
            error: `Debe completar el titulo de los productos`
        })
    }
    let productos = await productManager.getProduct()
    let existenProductos = productos.find(produ => produ.title === title)
    if (existenProductos) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({
            error: `El producto ${title} ya existe`
        })
    }
    //Validaciones
    try {
        let productoNuevo = await productManager.addProduct({title, ...otros})
        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({productoNuevo});
        
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({
            error: `Al agregar el nuevo producto ${title}`
        })
        
    }
})
//METODO PUT se usa para reemplazar toda la informacion acrual de un recurso existente en el servidor


// Ruta para obtener un producto por ID
app.get("/api/products/:id", async (req, res) => {
    let {
        id
    } = req.params;
    id = Number(id);

    if (isNaN(id)) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({
            error: 'El id debe ser numérico'
        });
    }

    try {
        const products = await productManager.getProduct();
        const producto = products.find(product => product.id === id);

        if (!producto) {
            return res.status(404).json({
                error: `El producto con el id: ${id} no es válido`
            });
        }

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({
            payload: producto
        });
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).json({
            error: 'Error en el servidor'
        });
    }
});

//ejempplo de clase
let nombre = "Martina"
app.get("/api/nombre", (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).json({
        nombre
    })

})
app.post("/api/nombre", (req, res) => {
    let {
        nombre: nombreBody
    } = req.body
    if (!nombreBody) {
        res.setHeader('Content-type', 'application/json');
        return res.status(400).json({
            error: `complete el nombre`
        })
    } else {
        nombre = `${nombre} ${nombreBody}`
        res.setHeader('Content-type', 'application/json');
        return res.status(200).json({
            nombre
        })
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});