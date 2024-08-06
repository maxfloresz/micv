import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
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
