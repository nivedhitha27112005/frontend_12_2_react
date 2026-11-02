import PageCard from '../components/PageCard.jsx'

const Task3 = () => {
  const employees = [
    { id: 1, name: 'Arun', salary: 25000 },
    { id: 2, name: 'Priya', salary: 30000 },
    { id: 3, name: 'Rahul', salary: 35000 },
    { id: 4, name: 'Divya', salary: 40000 },
  ]

  return (
    <>
      <PageCard number="3" title="Employee details" concept="Array of objects rendering">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead><tr className="bg-[#ccfbf1] text-[#115e59]"><th className="px-4 py-3">Employee Name</th><th className="px-4 py-3">Salary</th></tr></thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-b border-[#e2e8f0]">
                  <td className="px-4 py-3">{employee.name}</td>
                  <td className="px-4 py-3">₹{employee.salary.toLocaleString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageCard>
    </>
  )
}

export default Task3
