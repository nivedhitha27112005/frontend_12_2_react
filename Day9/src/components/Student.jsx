const Student = ({ name, age, course }) => {
  return (
    <>
      <article className="rounded border border-gray-300 bg-white p-4">
        <h2 className="font-semibold text-black">{name}</h2>
        <p className="text-gray-700">Age: {age}</p>
        <p className="text-gray-700">Course: {course}</p>
      </article>
    </>
  )
}

export default Student
