import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Rutas from './routes/Rutas'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Rutas />
      </BrowserRouter>
    </>
  )
}

export default App
