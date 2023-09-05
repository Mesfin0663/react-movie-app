import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './pages/movies/Movies'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SingleMovie from './pages/single-movie/SingleMovie'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Header/>
         <Routes>
            <Route path='/' element={<Movies/>}/>
            <Route path='/single-movie' element={<SingleMovie/>}/>
             
         </Routes> 
      </BrowserRouter>
      {/* <Movies/> */}
    </>
  )
}

export default App
