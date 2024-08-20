//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import ItemListContainer from './components/containers/itemListContainer/itemListContainer'
import { useRef, useState } from 'react'


function App() {
  // const divRef = useRef(null)

  // const click = () => {
  //   divRef.current.innerHTML = 'Hola'
  // }
  const [contador, setContador] = useState(0)
  const numRef = useRef(0)
  console.log(numRef.current);
  return (
    <div>
      {/* <div ref={divRef}>Contenido</div> */}
      {/* al hacer click en el boton va a cambiar la referencia */}
      {/* <button onClick={click}>Cambiar Contenido</button> */}


      {/* <ItemListContainer greeting='Hola' >
        <div>
          <p>Soy el children</p>
        </div>

      </ItemListContainer> */}

      <div>{contador}</div>
      <button onClick={() => setContador(contador + 1)}>Cambiar Contenido</button>
      <button onClick={() => numRef.current +=1}>CambiarRef</button>
    </div>
  )
}

export default App
