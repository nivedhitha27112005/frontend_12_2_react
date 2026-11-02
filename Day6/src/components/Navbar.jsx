import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-slate-900 p-3 font-bold text-white">
      <div className="mx-4 w-32 rounded-2xl bg-teal-500 p-1 text-center text-white sm:mx-15 sm:w-50">
        React
      </div>
      <div className="mx-2 flex gap-3 sm:mx-15 sm:gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
        <Link to="/help">Help</Link>
      </div>
      </div>
    </>
  )
}

export default NavBar
