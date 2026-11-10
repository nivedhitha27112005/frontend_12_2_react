import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [error, setError] = useState("")

  const handleEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setUserPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!userEmail.trim() || !userPassword) {
      setError("Please fill the form")
      return
    }

    const users = JSON.parse(localStorage.getItem("authdatas")) || []
    const matchedUser = users.find(
      (user) => user.userEmail === userEmail && user.userPassword === userPassword
    )

    if (!matchedUser) {
      setError("Invalid email or password")
      return
    }

    localStorage.setItem("isActive", JSON.stringify(matchedUser))
    navigate("/")
  }

  return (
    <>
      <div className="flex justify-center p-5 items-center min-h-[calc(100vh-68px)]">
        <form onSubmit={handleSubmit} className="bg-emerald-100 flex flex-col p-8 rounded-2xl gap-4 w-full max-w-100">
          <h3 className="text-2xl">Login</h3>
          <p>Login Here if Already Registered</p>
          {error && <p role="alert" className="text-red-700">{error}</p>}
          <input type="email" value={userEmail} onChange={handleEmail} className="border rounded-2xl p-2 bg-white" placeholder="Enter your Email" autoComplete="email" />
          <input type="password" value={userPassword} onChange={handlePassword} className="border rounded-2xl p-2 bg-white" placeholder="Enter your Password" autoComplete="current-password" />
          <div className="flex justify-center">
            <button type="submit" className="bg-emerald-800 text-white p-2 rounded-2xl w-50">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
