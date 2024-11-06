import Card from './components/Card'
import './App.css'

function App() {
  const colores = ["rojo", "morado", "gris"] 
  return (
    <>
      {colores.map((color) => (<Card atributo={color}/>))}
    </>
  )
}

export default App
