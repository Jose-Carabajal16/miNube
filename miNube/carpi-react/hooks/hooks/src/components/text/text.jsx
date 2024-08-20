// Text.js
import { useState } from "react";
import TextH2 from "../textH2/textH2";

const Text = () => {
    const [ocultar, setOcultar] = useState(true);
    const mostrarOcultar = () => {
        setOcultar(!ocultar);
        console.log(ocultar);
    };

    return (
        <div>
            <button onClick={mostrarOcultar}>
                {ocultar ? "Ocultar" : "Mostrar"}
            </button>
            {ocultar && <TextH2 />}
        </div>
    );
}

export default Text;
