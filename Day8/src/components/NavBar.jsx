import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <header className="flex flex-wrap items-center justify-end gap-3 bg-[#0f766e] px-4 py-4 text-white min-[521px]:px-[7%]">
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link className="text-white no-underline hover:underline" to="/">Home</Link>
          {[1, 2, 3, 4, 5].map((task) => (
            <Link className="text-white no-underline hover:underline" key={task} to={`/task-${task}`}>Task {task}</Link>
          ))}
        </nav>
      </header>
    </>
  )
}

export default NavBar