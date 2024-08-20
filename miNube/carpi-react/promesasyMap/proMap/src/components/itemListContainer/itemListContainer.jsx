import { useEffect, useState } from 'react';
import data from '../../data/productos.json';
const Container = () => {
    const [productos, setProductos] = useState([]);
    //console.log(productos);

    //console.log(data)
    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)

        })
    }

    useEffect(() => {
        pedirProductos()
        .then((res) => {
           setProductos(res);
           // productos = res;
           // console.log(productos);
        })

    }, [])
    // const nombres = ['josefina', 'maria', 'mateo'];
    // const nombres2 = nombres.map((nombres) => nombres + '1')
    // console.log(nombres2)
    return(
        <div>
            {
             productos.length > 0 && 
             productos.map((producto) => {
                return(
                    <div>
                    <img src={producto.img} alt={producto.titulo} />
                    <h2>{producto.titulo}</h2>
                    <p>{producto.descripcion}</p>
                    <p>${producto.precio}</p>
                 </div>
                )

             })

            }

        </div>
    )
}
export default Container;