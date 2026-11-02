import { useState } from 'react'

const Traffic = () => {
  const [signal, setSignal] = useState('red')
  let message

  if (signal === 'red') {
    message = 'Stop'
  } else if (signal === 'yellow') {
    message = 'Ready'
  } else {
    message = 'Go'
  }

  return (
    <section className="mx-auto mt-10 max-w-xl rounded-2xl border border-violet-100 bg-white p-8 text-center shadow-xl shadow-violet-100">
      <h1 className="mb-6 text-2xl font-bold text-violet-950">Traffic Signal</h1>
      <div className="mb-6 flex justify-center gap-3">
        <button className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700" onClick={() => setSignal('red')}>Red</button>
        <button className="rounded-lg bg-amber-500 px-5 py-2 font-semibold text-white hover:bg-amber-600" onClick={() => setSignal('yellow')}>Yellow</button>
        <button className="rounded-lg bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-700" onClick={() => setSignal('green')}>Green</button>
      </div>
      <p className="text-xl font-semibold text-violet-950">{message}</p>
    </section>
  )
}

export default Traffic
