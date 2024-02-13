import './App.css'
import Login from "./components/Login"
import Sigin from './components/Sigin'
import NoPages from './components/NoPages'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Card from './components/Card'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login className="login"></Login>}></Route>
        <Route path='signup' element={<Sigin></Sigin>}></Route>
        <Route path='card' element={<Card></Card>}></Route>
        <Route path='*' element={<NoPages></NoPages>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
