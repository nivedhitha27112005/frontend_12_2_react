import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [error, setError] = useState("")

  const handleName = (e) => {
    setUserName(e.target.value)
  }

  const handleEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setUserPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!userName.trim() || !userEmail.trim() || !userPassword) {
      setError("Please fill the form")
      return
    }

    const users = JSON.parse(localStorage.getItem("authdatas")) || []
    const emailAlreadyUsed = users.some(
      (user) => user.userEmail === userEmail
    )

    if (emailAlreadyUsed) {
      setError("This email is already registered")
      return
    }

    const newUser = {
      id: Date.now(),
      userName: userName.trim(),
      userEmail: userEmail.trim(),
      userPassword,
    }

    localStorage.setItem("authdatas", JSON.stringify([...users, newUser]))
    setError("Registration successful. Please log in.")
    setTimeout(() => navigate("/login"), 1200)
  }

  return (
    <>
      <div className="flex justify-center p-5 items-center min-h-[calc(100vh-68px)]">
        <form onSubmit={handleSubmit} className="bg-emerald-100 flex flex-col p-8 rounded-2xl gap-4 w-full max-w-100">
          <h3 className="text-2xl">Register</h3>
          <p>New Users Please Register</p>
          {error && <p role="status" className="text-red-700">{error}</p>}
          <input type="text" value={userName} onChange={handleName} className="border rounded-2xl p-2 bg-white" placeholder="Enter your Name" autoComplete="name" />
          <input type="email" value={userEmail} onChange={handleEmail} className="border rounded-2xl p-2 bg-white" placeholder="Enter your Email" autoComplete="email" />
          <input type="password" value={userPassword} onChange={handlePassword} className="border rounded-2xl p-2 bg-white" placeholder="Enter your Password" autoComplete="new-password" />
          <div className="flex justify-center">
            <button type="submit" className="bg-emerald-800 text-white p-2 rounded-2xl w-50">Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
