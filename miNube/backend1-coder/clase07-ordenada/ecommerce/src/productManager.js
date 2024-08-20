import fs from 'fs/promises';

class ProducrManager{
    constructor(path){
        this.path = path;
        this.products = [];
        this.loadProducts();
    }
    async loadProducts(){
        try {
            const data = await fs.readFile(this.path, 'utf8');
            this.products = JSON.parse(data)
    }catch(error){
        console.log("error al cargar los productos")
        this.products = [];
    }
    }
    async saveProduct(){
        try {
            await fs.writeFile(this.path, JSON.stringify(this.products, null, 2));
        } catch(error){
            console.error('Error al guardar el producto', error);
        }
    }
    async getProduct(){
        return this.products;
    }
    async getProductById(id){
        const producto = this.products.find(produ => produ.id === id)
        if(!producto){
            console.log('Producto no encontrado')
            return null;
        }
    }
    async addProduct(producto){
        const existeProducto = this.products.find(produ => produ.code === producto.code)
        if(existeProducto){
            console.log(`El producto con el codigo: ${existeProducto.code} ya existe`)
            return
        }
        const id = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;
        const newProduct = {id, ...producto};
        this.products.push(newProduct);
        await this.saveProduct();
    }

}

export default ProducrManager