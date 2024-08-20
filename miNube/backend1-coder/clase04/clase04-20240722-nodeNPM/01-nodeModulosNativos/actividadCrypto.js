const crypto = require("crypto");



class UsersManager {
    static users = []; // esta será nuestra base de datos

    static getUsers() {
        return this.users;
    }

    static addUser(nombre, apellido, usuario, email, contraseña) {
        // Validaciones
        if (
            typeof nombre !== "string" ||
            typeof apellido !== "string" ||
            typeof usuario !== "string" ||
            typeof email !== "string" ||
            typeof contraseña !== "string"
        ) {
            console.log(`Los formatos de los campos son inválidos`);
            return;
        }
        if (!nombre.trim() || !apellido.trim() || !usuario.trim() || !email.trim() || !contraseña.trim()) {
            console.log(`Debe completar todos los campos`);
            return;
        }

        // Expresión regular para validar email
        let regExMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regExMail.test(email)) {
            console.log("Email inválido");
            return;
        }

        // Validar si el usuario ya existe
        let usersExiste = UsersManager.users.find(user => user.email === email);
        if (usersExiste) {
            console.log("Ya existe un usuario con ese email");
            return; // Detener la ejecución si el usuario ya existe
        }

        let id = 1;
        if (UsersManager.users.length > 0) {
            id = Math.max(...UsersManager.users.map(d => d.id)) + 1;
        }
        //Validacion contraseña
        contraseña = crypto.createHmac("sha1", "CoderCoder123").update(contraseña).digest("hex");

        let nuevoUsuario = {
            id,
            nombre,
            apellido,
            usuario,
            email,
            contraseña
        };
        UsersManager.users.push(nuevoUsuario);
        console.log(`Usuario ${usuario} agregado exitosamente`);
    }//adduser
    //login
    static login(email, contraseña) {
        contraseña = String(contraseña)
        contraseña = crypto.createHmac("sha1", "CoderCoder123").update(contraseña).digest("hex");


        let usuario = UsersManager.users.find(user => user.email === email && user.contraseña === contraseña)
        if (!usuario) {
            console.log("Este usuario es invalido");
            return
        } else {
            console.log(`Login correcto, Bienvenido ${usuario.nombre}`)
        }
    }
}

// Ejemplo de uso

UsersManager.addUser("Juan", "Pérez", "juanperez", "juan.perez@example.com", "123456");
UsersManager.addUser("Martina", "Dias", "martiDias", "marti.dias@example.com", "123456");
UsersManager.addUser("Martina", "Dias", "martiDias", "marti.dias@example.com", "123456");
UsersManager.addUser("Juan", "Pérez", "juanperez", "juan.perezexample.com", "123456");
UsersManager.addUser("Juan", "Pérez", "juanperez", "juan.perez@example.com");
UsersManager.addUser("   ", "Pérez", "juanperez", "juan.perez@example.com", "123456");
UsersManager.addUser(100, "Pérez", "juanperez", "juan.perez@example.com", "123456");
console.log(UsersManager.getUsers());

UsersManager.login("carlos@example.com", "123")
UsersManager.login("marti.dias@example.com", "1234")
UsersManager.login("marti.dias@example.com", "123456")
