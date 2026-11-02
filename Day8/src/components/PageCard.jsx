const PageCard = ({ number, title, concept, children }) => {
  return (
    <>
      <section className="rounded-lg bg-white p-5 shadow-sm min-[521px]:p-7">
        <p className="mb-2 mt-0 text-sm font-bold uppercase tracking-[0.12em] text-[#0f766e]">Task {number} · {concept}</p>
        <h1 className="mb-5 mt-0 text-[26px]">{title}</h1>
        {children}
      </section>
    </>
  )
}

export default PageCard
