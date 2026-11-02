import { useState } from 'react'

const Task2 = () => {
  const [student, setStudent] = useState({ name: '', email: '', age: '' })
  const [submittedStudent, setSubmittedStudent] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setStudent({ ...student, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedStudent({ ...student })
  }

  return (
    <>
    <div className="space-y-5 rounded-lg bg-white p-5 sm:p-7">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-1 text-sm font-medium text-neutral-800">Name
            <input name="name" type="text" value={student.name} onChange={handleChange} placeholder="Student name" className="block w-full rounded-md border border-neutral-300 px-3 py-2 font-normal outline-none focus:border-black focus:ring-2 focus:ring-neutral-200" required />
          </label>
          <label className="space-y-1 text-sm font-medium text-neutral-800">Email
            <input name="email" type="email" value={student.email} onChange={handleChange} placeholder="student@example.com" className="block w-full rounded-md border border-neutral-300 px-3 py-2 font-normal outline-none focus:border-black focus:ring-2 focus:ring-neutral-200" required />
          </label>
          <label className="space-y-1 text-sm font-medium text-neutral-800 sm:col-span-2">Age
            <input name="age" type="number" min="1" value={student.age} onChange={handleChange} placeholder="Age" className="block w-full rounded-md border border-neutral-300 px-3 py-2 font-normal outline-none focus:border-black focus:ring-2 focus:ring-neutral-200" required />
          </label>
        </div>
        <button type="submit" className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">Submit Details</button>
      </form>
      <div className="overflow-x-auto rounded-md border border-gray-200">
        <table className="w-full min-w-[420px] text-left text-sm">
          <thead className="bg-black text-white">
            <tr><th className="px-4 py-3 font-medium">Name</th><th className="px-4 py-3 font-medium">Email</th><th className="px-4 py-3 font-medium">Age</th></tr>
          </thead>
          <tbody>
            {submittedStudent ? <tr><td className="px-4 py-3 text-neutral-800">{submittedStudent.name}</td><td className="px-4 py-3 text-neutral-800">{submittedStudent.email}</td><td className="px-4 py-3 text-neutral-800">{submittedStudent.age}</td></tr> : <tr><td colSpan="3" className="px-4 py-3 text-neutral-500">No student submitted yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Task2
