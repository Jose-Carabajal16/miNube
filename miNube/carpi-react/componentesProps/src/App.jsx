import './App.css'
import Usuario from './components/usuario/usuario'
import Card from './components/cards/card'


function App() {

  return (
   <div>
    <Usuario nombre='Josefina' edad={24} nacionalidad='argentina' />
    <Usuario nombre='Maria' edad={34} nacionalidad='argentina' />
    <Card />

   </div>
  )
}

export default App
