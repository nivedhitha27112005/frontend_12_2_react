import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <div className="flex justify-center bg-violet-800 px-4 py-3 shadow-lg">
        <div className="flex w-full max-w-4xl flex-wrap justify-center gap-x-8 gap-y-2 p-3">
            <Link to ="/" className="font-bold text-violet-100 transition hover:text-fuchsia-300">Home</Link>
            <Link to ="/login" className="font-bold text-violet-100 transition hover:text-fuchsia-300">Login</Link>
            <Link to ="/show" className="font-bold text-violet-100 transition hover:text-fuchsia-300">ShowHide</Link>
            <Link to ="/even" className="font-bold text-violet-100 transition hover:text-fuchsia-300">EvenOdd</Link>
            <Link to ="/result" className="font-bold text-violet-100 transition hover:text-fuchsia-300">Result</Link>
            <Link to ="/traffic" className="font-bold text-violet-100 transition hover:text-fuchsia-300">Traffic</Link>
        </div>
    </div>
    </>
    
  )
}

export default Navbar
