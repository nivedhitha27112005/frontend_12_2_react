import { useEffect, useState } from "react"

const Dashboard = () => {
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem("isActive") || "null")
    setUserName(activeUser?.userName || "User")
  }, [])

  return (
    <>
      <h1 className="text-2xl">Welcome {userName}</h1>
    </>
  )
}

export default Dashboard
