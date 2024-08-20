class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que no se repita el campo "code"
        let existProduct = this.products.find(product => product.code === code);
        if (existProduct) {
            console.log(`El producto con el código ${existProduct.code} ya existe`);
            return;
        }
        
        // Validar que el id de cada producto se incremente en 1

        let id = 1;
        if (this.products.length > 0) {
            id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        });
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.log("Not found");
            return;
        }
        return product;
    }
}

const productManager = new ProductManager();

productManager.addProduct("Anillo de Oro", "Anillo de oro 18k con diamantes", 1500, "anillo_oro.jpg", "A001", 10);
productManager.addProduct("Collar de Plata", "Collar de plata esterlina", 200, "collar_plata.jpg", "C001", 15);
productManager.addProduct("Pulsera de Perlas", "Pulsera de perlas naturales", 500, "pulsera_perlas.jpg", "P001", 8);
productManager.addProduct("Reloj de Lujo", "Reloj de lujo con correa de cuero", 2500, "reloj_lujo.jpg", "R001", 5);

console.log("Lista de productos:");
console.log(productManager.getProducts());

console.log("Producto con ID 2:");
console.log(productManager.getProductById(2));

console.log("Producto con ID 8:");
console.log(productManager.getProductById(8));


