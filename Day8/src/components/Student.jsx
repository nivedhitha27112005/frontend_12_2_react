const Student = ({ name, age, course }) => {
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-[#f0fdfa] p-4"><p className="m-0 text-sm text-[#64748b]">Name</p><p className="mb-0 mt-1 font-semibold">{name}</p></div>
        <div className="rounded-lg bg-[#f0fdfa] p-4"><p className="m-0 text-sm text-[#64748b]">Age</p><p className="mb-0 mt-1 font-semibold">{age}</p></div>
        <div className="rounded-lg bg-[#f0fdfa] p-4"><p className="m-0 text-sm text-[#64748b]">Course</p><p className="mb-0 mt-1 font-semibold">{course}</p></div>
      </div>
    </>
  )
}

export default Student
