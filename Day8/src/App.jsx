import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Task1 from './pages/Task1.jsx'
import Task2 from './pages/Task2.jsx'
import Task3 from './pages/Task3.jsx'
import Task4 from './pages/Task4.jsx'
import Task5 from './pages/Task5.jsx'

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f0fdfa] font-[Arial,Helvetica,sans-serif] text-[#12312f]">
        <NavBar />
        <main className="mx-auto my-6 w-[min(760px,calc(100%-32px))] min-[521px]:my-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task-1" element={<Task1 />} />
            <Route path="/task-2" element={<Task2 />} />
            <Route path="/task-3" element={<Task3 />} />
            <Route path="/task-4" element={<Task4 />} />
            <Route path="/task-5" element={<Task5 />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
