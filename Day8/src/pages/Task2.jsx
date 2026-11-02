import PageCard from '../components/PageCard.jsx'

const Task2 = () => {
  const student = {
    name: 'Arun',
    age: 21,
    department: 'Computer Science',
    city: 'Chennai',
  }

  return (
    <>
      <PageCard number="2" title="Student details" concept="Object rendering">
        <dl className="divide-y divide-[#e2e8f0]">
          <div className="flex justify-between gap-4 py-3"><dt className="text-[#64748b]">Student Name</dt><dd className="m-0 font-semibold">{student.name}</dd></div>
          <div className="flex justify-between gap-4 py-3"><dt className="text-[#64748b]">Age</dt><dd className="m-0 font-semibold">{student.age}</dd></div>
          <div className="flex justify-between gap-4 py-3"><dt className="text-[#64748b]">Department</dt><dd className="m-0 font-semibold">{student.department}</dd></div>
          <div className="flex justify-between gap-4 py-3"><dt className="text-[#64748b]">City</dt><dd className="m-0 font-semibold">{student.city}</dd></div>
        </dl>
      </PageCard>
    </>
  )
}

export default Task2
