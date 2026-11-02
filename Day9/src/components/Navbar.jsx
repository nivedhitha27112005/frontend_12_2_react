import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-wrap items-center gap-2 border-b border-black bg-black px-6 py-4 text-white">
        <span className="mr-4 font-semibold text-white">tasksday9</span>
        <NavLink to="/task1" className={({ isActive }) => `rounded px-3 py-2 text-sm ${isActive ? 'bg-white text-black' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}>
          Task 1
        </NavLink>
        <NavLink to="/task2" className={({ isActive }) => `rounded px-3 py-2 text-sm ${isActive ? 'bg-white text-black' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}>
          Task 2
        </NavLink>
        <NavLink to="/task3" className={({ isActive }) => `rounded px-3 py-2 text-sm ${isActive ? 'bg-white text-black' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}>
          Task 3
        </NavLink>
      </nav>
    </>
  )
}

export default Navbar
