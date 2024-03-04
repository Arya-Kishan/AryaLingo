import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Learn from './Pages/Learn'
import Quiz from './Pages/Quiz'
import Result from './Pages/Result'
import Converter from './Pages/Converter'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/result' element={<Result />} />
          <Route path='/converter' element={<Converter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
