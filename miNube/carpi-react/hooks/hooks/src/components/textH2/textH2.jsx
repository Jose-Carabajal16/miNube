import { useState, useEffect } from "react";
const TextH2 = () => {
    const [text, setText] = useState("")
    const mostrarTexto  = (e) => {
        setText(e.target.value)

    }
    //console.log('Hola mundo')
    useEffect(() => {
        console.log('componente montado')
        return () => {
            console.log('componente desmontado')
        }

    }, [] )
    useEffect(() => {
        console.log("Texto modificado")
    }, [text] )
    return (
        <div>
            <input type="text" onChange={mostrarTexto}/>
            <h2>{text}</h2>

        </div>
    );
}

export default TextH2;
