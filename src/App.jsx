import './App.css'
import Datos from './Datos.jsx'
function App() {

  const alumno={
    nombre:'Carlos',
    edad:23
  }
  const carrera={
    nombrecarrera:'Ingenieria en sistemas',
    anio:'2024' ///la ñ no va
  }

  return (
    <Datos alumno={alumno} carrera={carrera}/>
  )
}
export default App
