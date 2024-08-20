const Usuario = (props) => {
    const {nombre, edad, nacionalidad } = props;
    console.log(props)
    //console.log(nombre)
    return (
        <div>
        <h1>Nombre: {nombre}</h1>
        <p>Edad: {edad}</p>
        <p>Nacionalidad: {nacionalidad}</p>
        <hr />
        </div>
    )
}

export default Usuario;