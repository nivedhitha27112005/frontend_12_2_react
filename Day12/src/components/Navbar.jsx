import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem("isActive") || "null")
    setUserName(activeUser?.userName || "")
  }, [location])

  return (
    <>
    <div className="bg-emerald-600 flex justify-between p-5">
        <div>
            MyAPP
        </div>
        <div className="flex gap-20">
            <Link to="/">{userName || "Home"}</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar
