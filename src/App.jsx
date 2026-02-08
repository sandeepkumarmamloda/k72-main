import { Route, Routes } from 'react-router-dom'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Navbar from './components/Navigation/Navbar'
import Agence from './pages/Agence'
import Home from './pages/Home'
import Projects from './pages/Projects'


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App