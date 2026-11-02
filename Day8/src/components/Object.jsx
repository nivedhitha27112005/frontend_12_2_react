

const Object = ({details}) => {
  return (
    <>
    
        <div>
            <div className="p-2">
                <h3>{details.name}</h3>
                <p>{details.age}</p>
                <h6>{details.qualification}</h6>
            </div>
        </div>
    
    </>
  )
}

export default Object