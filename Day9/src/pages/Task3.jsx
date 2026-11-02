import Student from '../components/Student'

const Task3 = () => {
  const students = [
    { name: 'Arun', age: 20, course: 'React' },
    { name: 'Kumar', age: 21, course: 'JavaScript' },
    { name: 'Priya', age: 19, course: 'Web Development' },
  ]

  return (
    <>
      <section className="space-y-4">
        <h1 className="text-xl font-semibold text-black">Task 3 — Student Details</h1>
        <div className="grid gap-3 sm:grid-cols-2">
          {students.map((student) => <Student key={student.name} {...student} />)}
        </div>
      </section>
    </>
  )
}

export default Task3
