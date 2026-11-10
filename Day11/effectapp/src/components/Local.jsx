import { useEffect, useState } from "react"

const Local = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [people, setPeople] = useState([])

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleRole = (event) => {
    setRole(event.target.value)
  }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userdatas")) || []
    setPeople(saved)
  }, [])

  const handleClick = (event) => {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !role.trim()) {
      alert("Please enter your name, email, and role")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email")
      return
    }

    const updated = [...people, { id: Date.now(), name, email, role }]
    localStorage.setItem("userdatas", JSON.stringify(updated))
    setPeople(updated)
    alert("Successfully Added")
    setName("")
    setEmail("")
    setRole("")
  }

  return (
    <>
      <div>
        <input type="text" value={name} placeholder="Enter your Name" onChange={handleName} />
        <input type="email" value={email} placeholder="Enter your Email" onChange={handleEmail} />
        <input type="text" value={role} placeholder="Enter your Role" onChange={handleRole} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        {people.map((person) => (
          <div key={person.id}>
            <h1>{person.name}</h1>
            <p>{person.email}</p>
            <p>{person.role}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Local
