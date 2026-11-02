import PageCard from '../components/PageCard.jsx'
import Student from '../components/Student.jsx'

const Task4 = () => {
  const name = 'Kumar'
  const age = 22
  const course = 'React JS'

  return (
    <>
      <PageCard number="4" title="Student props" concept="Props passing from parent to child">
        <Student name={name} age={age} course={course} />
      </PageCard>
    </>
  )
}

export default Task4
