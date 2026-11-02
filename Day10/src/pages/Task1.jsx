import { useState } from 'react'

const Task1 = () => {
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedName(name.trim())
  }

  return (
    <>
    <div className="space-y-5 rounded-lg bg-white p-5 sm:p-7">
      <form onSubmit={handleSubmit} className="space-y-3">
        <label htmlFor="student-name" className="block text-sm font-medium text-neutral-800">Student Name</label>
        <input id="student-name" type="text" value={name} onChange={handleChange} placeholder="Enter student name" className="w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:border-black focus:ring-2 focus:ring-neutral-200" required />
        <button type="submit" className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Submit</button>
      </form>
      <div className="overflow-x-auto rounded-md border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-black text-white">
            <tr><th className="px-4 py-3 font-medium">Student Name</th></tr>
          </thead>
          <tbody>
            {submittedName ? <tr><td className="px-4 py-3 text-neutral-800">{submittedName}</td></tr> : <tr><td className="px-4 py-3 text-neutral-500">No student submitted yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Task1
