import fs from 'fs/promises';

class ProductManager {
    constructor(path) {
        this.path = path; // Ruta al archivo donde se guardarán los productos
        this.products = []; // Inicializa con un array vacío
        this.loadProducts(); // Carga inicial de productos desde el archivo
    }

    async loadProducts() {
        try {
            const data = await fs.readFile(this.path, 'utf8'); // Lee el archivo de productos
            this.products = JSON.parse(data); // Convierte el contenido del archivo en un arreglo de productos
        } catch (error) {
            // Si el archivo no existe o hay un error en la lectura, inicializa el array vacío
            this.products = [];
        }
    }

    async saveProducts() {
        try {
            await fs.writeFile(this.path, JSON.stringify(this.products, null, 2)); // Guarda los productos en el archivo
        } catch (error) {
            console.error('Error al guardar productos:', error);
        }
    }

    async getProducts() {
        return this.products;
    }

    async getProductById(id) {
        const product = this.products.find(prod => prod.id === id);
        if (!product) {
            console.log("Producto no encontrado");
            return null;
        }
        return product;
    }

    async addProduct(product) {
        const existProduct = this.products.find(prod => prod.code === product.code);
        if (existProduct) {
            console.log(`El producto con el código ${existProduct.code} ya existe`);
            return;
        }

        const id = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;
        const newProduct = { id, ...product };
        this.products.push(newProduct);
        await this.saveProducts();
    }
}

export default ProductManager; // Exportar la clase para poder usarla en otros archivos




