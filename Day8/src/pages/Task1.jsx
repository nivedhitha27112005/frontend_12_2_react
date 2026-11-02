import PageCard from '../components/PageCard.jsx'

const Task1 = () => {
  const languages = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']

  return (
    <>
      <PageCard number="1" title="Programming languages" concept="Array rendering using map()">
        <ul className="grid gap-3 p-0 sm:grid-cols-2">
          {languages.map((language) => (
            <li key={language} className="list-none rounded-lg bg-[#f0fdfa] px-4 py-3 font-semibold">{language}</li>
          ))}
        </ul>
      </PageCard>
    </>
  )
}

export default Task1
