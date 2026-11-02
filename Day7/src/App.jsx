import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import ShowHide from './pages/ShowHide'
import EvenOdd from './pages/EvenOdd'
import Result from './pages/Result'
import Traffic from './pages/Traffic'

const App = () => {
  return (
    <>
    <div >
      <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/show" element={<ShowHide/>}/>
          <Route path="/even" element={<EvenOdd/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="/traffic" element={<Traffic/>}/>
        </Routes>
      </main>
      </div>
      </>
  )
}

export default App