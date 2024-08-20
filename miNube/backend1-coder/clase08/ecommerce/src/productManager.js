import fs from 'fs/promises';

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
    }

    // Carga los productos desde el archivo
    async loadProducts() {
        try {
            const data = await fs.readFile(this.path, 'utf8');
            this.products = JSON.parse(data);
        } catch (error) {
            console.error("Error al cargar los productos:", error);
            this.products = [];
        }
    }

    // Guarda los productos en el archivo
    async saveProducts() { // Cambié el nombre para mayor claridad
        try {
            await fs.writeFile(this.path, JSON.stringify(this.products, null, 2));
        } catch (error) {
            console.error('Error al guardar los productos:', error);
        }
    }

    // Devuelve todos los productos
    async getProducts() {
        await this.loadProducts(); // Aseguramos que los productos estén actualizados
        return this.products;
    }

    // Devuelve un producto por ID
    async getProductById(id) {
        await this.loadProducts(); // Aseguramos que los productos estén actualizados
        const producto = this.products.find(produ => produ.id === id);
        if (!producto) {
            console.log('Producto no encontrado');
            return null;
        }
        return producto; // Retorna el producto si se encuentra
    }

    // Agrega un nuevo producto
    async addProduct(producto) {
        await this.loadProducts(); // Aseguramos que los productos estén actualizados
        const existeProducto = this.products.find(produ => produ.code === producto.code);
        if (existeProducto) {
            console.log(`El producto con el código: ${existeProducto.code} ya existe`);
            return;
        }
        const id = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;
        const newProduct = { id, ...producto };
        this.products.push(newProduct);
        await this.saveProducts();
        return newProduct; // Retorna el nuevo producto
    }

    // Actualiza un producto por ID
    async updateProduct(id, productoModificado = {}) {
        await this.loadProducts(); // Asegura que los productos estén actualizados
        const indiceProducto = this.products.findIndex(produ => produ.id === id);
        if (indiceProducto === -1) {
            console.log(`El producto con el id: ${id} no existe`);
            return null;
        }

        // Mantén los valores existentes para las propiedades no proporcionadas en `productoModificado`
        const productoExistente = this.products[indiceProducto];

        // Crear un nuevo objeto producto con solo los campos que realmente se están modificando
        const productoActualizado = {
            ...productoExistente, // Mantenemos las propiedades existentes
            ...productoModificado, // Sobrescribimos solo las propiedades proporcionadas
            id: productoExistente.id //id no se puede modificar
        };

        // Actualizar la lista de productos con el producto modificado
        this.products[indiceProducto] = productoActualizado;

        // Guardar los productos actualizados
        await this.saveProducts();
        return this.products[indiceProducto]; // Retorna el producto modificado
    }
    //borrar un producto    
    async deleteProduct(id) {
        await this.loadProducts(); // Asegurar que los productos estén actualizados
        const indiceProducto = this.products.findIndex(produ => produ.id === id);
        
        if (indiceProducto === -1) {
            console.log(`El producto con el id: ${id} no existe`);
            return null;
        }
    
        // Guardamos el producto eliminado para poder acceder a sus datos luego
        const productoEliminado = this.products[indiceProducto];
        
        console.log('Producto eliminado:', productoEliminado); // <-- Agrega esta línea para verificar
    
        // Filtramos los productos para excluir el que se va a eliminar
        this.products = this.products.filter(produ => produ.id !== id);
        
        // Guardamos los productos actualizados
        await this.saveProducts();
    
        // Devolvemos el producto eliminado
        return productoEliminado;
    }
    

}


export default ProductManager;
