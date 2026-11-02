import { useState } from 'react'

const Result = () => {
  const [marks, setMarks] = useState(35)

  return (
    <section className="mx-auto mt-10 max-w-xl rounded-2xl border border-violet-100 bg-white p-8 text-center shadow-xl shadow-violet-100">
      <h1 className="mb-6 text-2xl font-bold text-violet-950">Pass / Fail Result</h1>
      <p className="mb-3 text-lg text-slate-700">Marks: {marks}</p>
      <p className="mb-6 text-xl font-semibold text-fuchsia-700">{marks >= 40 ? 'Pass' : 'Fail'}</p>
      <button className="rounded-lg bg-violet-600 px-5 py-2 font-semibold text-white hover:bg-violet-700" onClick={() => setMarks(marks + 1)}>Increase Marks</button>
    </section>
  )
}

export default Result
