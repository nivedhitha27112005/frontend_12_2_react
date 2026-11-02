import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const linkClass = ({ isActive }) => `rounded px-3 py-2 text-sm text-white transition hover:bg-neutral-800 ${isActive ? 'bg-neutral-800' : ''}`

  return (
    <>
    <nav className="flex min-h-16 flex-wrap items-center justify-between gap-3 bg-black px-4 text-white sm:px-[7%]">
      <NavLink to="/task1" className="rounded px-2 py-1 text-lg font-bold text-white no-underline">React Tasks</NavLink>
      <div className="flex flex-wrap items-center gap-1">
        <NavLink to="/task1" className={linkClass}>Task 1</NavLink>
        <NavLink to="/task2" className={linkClass}>Task 2</NavLink>
        <NavLink to="/task3" className={linkClass}>Task 3</NavLink>
      </div>
    </nav>
    </>
  )
}

export default Navbar
