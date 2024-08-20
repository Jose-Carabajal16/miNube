import { useRef, useState } from "react"

const ItemListContainer = ( props )  => {
//diferencia entre useState y useRef
    const [ejemploUseState, setEjemploUseState] = useState(0)
    const ejemplo = useRef(0)
    console.log(ejemplo.current)
    return(
        <>
        <h2>{props.greeting}</h2>
        {props.children}
        </>
    )
}
export default ItemListContainer