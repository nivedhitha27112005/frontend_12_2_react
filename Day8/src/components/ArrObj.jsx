

const ArrObj = ({team}) => {
  return (
    <>
    {team.map((e,i)=>(
        <div>
            <div className="p-2">
                <div key={i}>
                    <h3 className="font-bold">{e.name}</h3>
                    <p>{e.role}</p>
                    <h6>{e.performance}</h6>
                </div>
            </div>
        </div>


    ))}
    </>
  )
}

export default ArrObj