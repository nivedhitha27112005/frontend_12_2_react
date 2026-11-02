import { useState } from 'react'

const emptyStudent = { name: '', email: '', course: '' }

const Task3 = () => {
  const [student, setStudent] = useState(emptyStudent)
  const [students, setStudents] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [viewingStudent, setViewingStudent] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setStudent({ ...student, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingId) {
      setStudents(students.map((item) => item.id === editingId ? { ...item, ...student } : item))
      setEditingId(null)
    } else {
      setStudents([...students, { id: Date.now(), ...student }])
    }
    setStudent(emptyStudent)
  }

  const handleEdit = (item) => {
    setStudent({ name: item.name, email: item.email, course: item.course })
    setEditingId(item.id)
    setViewingStudent(null)
  }

  const handleDelete = (id) => {
    setStudents(students.filter((item) => item.id !== id))
    if (viewingStudent?.id === id) setViewingStudent(null)
    if (editingId === id) {
      setEditingId(null)
      setStudent(emptyStudent)
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setStudent(emptyStudent)
  }

  return (
    <>
    <div className="space-y-5 rounded-lg bg-white p-5 sm:p-7">
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1 text-sm font-medium text-neutral-800">Name
              <input name="name" value={student.name} onChange={handleChange} placeholder="Student name" className="block w-full rounded-md border border-neutral-300 px-3 py-2 font-normal outline-none focus:border-black focus:ring-2 focus:ring-neutral-200" required />
            </label>
            <label className="space-y-1 text-sm font-medium text-neutral-800">Email
              <input name="email" type="email" value={student.email} onChange={handleChange} placeholder="student@example.com" className="block w-full rounded-md border border-neutral-300 px-3 py-2 font-normal outline-none focus:border-black focus:ring-2 focus:ring-neutral-200" required />
            </label>
            <label className="space-y-1 text-sm font-medium text-neutral-800 sm:col-span-2">Course
              <input name="course" value={student.course} onChange={handleChange} placeholder="Course name" className="block w-full rounded-md border border-neutral-300 px-3 py-2 font-normal outline-none focus:border-black focus:ring-2 focus:ring-neutral-200" required />
            </label>
          </div>
          <div className="flex flex-wrap gap-2">
          <button type="submit" className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">{editingId ? 'Save Changes' : 'Add Student'}</button>
            {editingId && <button type="button" onClick={handleCancelEdit} className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100">Cancel</button>}
          </div>
        </form>
      </div>

      {viewingStudent && <div className="relative rounded-lg border border-neutral-300 bg-neutral-50 p-4">
        <button type="button" onClick={() => setViewingStudent(null)} aria-label="Close student details" className="absolute right-3 top-3 rounded px-2 py-1 text-neutral-600 hover:bg-neutral-200">×</button>
        <h2 className="mb-2 font-semibold">Student Details</h2>
        <p className="text-sm text-neutral-700">Name: {viewingStudent.name}</p>
        <p className="text-sm text-neutral-700">Email: {viewingStudent.email}</p>
        <p className="text-sm text-neutral-700">Course: {viewingStudent.course}</p>
      </div>}

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h2 className="font-semibold">Student Records</h2>
        </div>
        {students.length === 0 ? <p className="p-5 text-sm text-gray-500">No students added yet.</p> : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-neutral-100 text-xs uppercase text-neutral-700">
                <tr><th className="px-4 py-3 font-medium">Name</th><th className="px-4 py-3 font-medium">Email</th><th className="px-4 py-3 font-medium">Course</th><th className="px-4 py-3 font-medium">Actions</th></tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {students.map((e, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 font-medium text-neutral-900">{e.name}</td>
                    <td className="px-4 py-3 text-neutral-700">{e.email}</td>
                    <td className="px-4 py-3 text-neutral-700">{e.course}</td>
                    <td className="px-4 py-3"><div className="flex gap-1.5">
                      <button type="button" onClick={() => setViewingStudent(e)} className="rounded border border-neutral-300 px-2.5 py-1 text-xs text-neutral-800 hover:bg-neutral-100">View</button>
                      <button type="button" onClick={() => handleEdit(e)} className="rounded border border-neutral-400 px-2.5 py-1 text-xs text-black hover:bg-neutral-100">Edit</button>
                      <button type="button" onClick={() => handleDelete(e.id)} className="rounded border border-neutral-400 px-2.5 py-1 text-xs text-black hover:bg-neutral-100">Delete</button>
                    </div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Task3
