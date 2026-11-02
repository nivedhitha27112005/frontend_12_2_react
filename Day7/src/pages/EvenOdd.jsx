import { useState } from 'react'

const EvenOdd = () => {
  const [number, setNumber] = useState(0)

  return (
    <section className="mx-auto mt-10 max-w-xl rounded-2xl border border-violet-100 bg-white p-8 text-center shadow-xl shadow-violet-100">
      <h1 className="mb-6 text-2xl font-bold text-violet-950">Even / Odd Number</h1>
      <p className="mb-3 text-lg text-slate-700">Number: {number}</p>
      <p className="mb-6 text-xl font-semibold text-fuchsia-700">{number % 2 === 0 ? 'Even Number' : 'Odd Number'}</p>
      <button className="rounded-lg bg-violet-600 px-5 py-2 font-semibold text-white hover:bg-violet-700" onClick={() => setNumber(number + 1)}>Increment</button>
    </section>
  )
}

export default EvenOdd
