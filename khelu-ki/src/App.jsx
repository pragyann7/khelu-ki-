import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import Taas from '../Components/Taas'
import LangurBurja from '../Components/LangurBurja'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/taas' element={<Taas />} />
        <Route path='/langurburja' element={<LangurBurja />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
