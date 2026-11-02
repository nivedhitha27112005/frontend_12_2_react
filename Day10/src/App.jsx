import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Task1 from './pages/Task1'
import Task2 from './pages/Task2'
import Task3 from './pages/Task3'

const App = () => {
  return (
    <>
    <div className="min-h-screen bg-white font-[Arial,Helvetica,sans-serif] text-black">
      <Navbar />
      <main className="mx-auto my-6 w-[min(760px,calc(100%-32px))] min-[521px]:my-12">
        <Routes>
          <Route path="/" element={<Navigate to="/task1" replace />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="*" element={<Navigate to="/task1" replace />} />
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App
