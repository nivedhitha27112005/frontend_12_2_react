import { useState } from 'react'

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <section className="mx-auto mt-10 max-w-xl rounded-2xl border border-violet-100 bg-white p-8 text-center shadow-xl shadow-violet-100">
      <h1 className="mb-6 text-2xl font-bold text-violet-950">Login / Logout</h1>
      <p className="mb-6 text-lg text-slate-700">{isLoggedIn ? 'Welcome User' : 'Please Login'}</p>
      {isLoggedIn ? (
        <button className="rounded-lg bg-fuchsia-600 px-5 py-2 font-semibold text-white hover:bg-fuchsia-700" onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className="rounded-lg bg-violet-600 px-5 py-2 font-semibold text-white hover:bg-violet-700" onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </section>
  )
}

export default Login
