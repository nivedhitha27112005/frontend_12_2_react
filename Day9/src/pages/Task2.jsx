import { useState } from 'react'

const Task2 = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="space-y-4 rounded border border-gray-300 bg-white p-6">
        <h1 className="text-xl font-semibold text-black">Task 2 — Simple Counter</h1>
        <p className="text-2xl text-gray-800">Count: {count}</p>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => setCount((currentCount) => currentCount + 1)} className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800">Increment</button>
          <button type="button" onClick={() => setCount((currentCount) => currentCount - 1)} className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800">Decrement</button>
          <button type="button" onClick={() => setCount(0)} className="rounded border border-gray-400 px-4 py-2 text-gray-800 hover:bg-gray-100">Reset</button>
        </div>
      </section>
    </>
  )
}

export default Task2
