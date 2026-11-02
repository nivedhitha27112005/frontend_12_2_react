

const Array = ({nums}) => {
  return (
    <>
    <div className="p-2 bg-amber-300 flex-2 justify-center">
        <p className="text-red-600 font-bold">Array Rendering</p>

        <div className="bg-blue-800 w-100 text-white p-2 flex-3" >
            {nums.map((e,i)=>(
            <div key={i}>

                <p>{e}</p>

            </div>

        ))}
        </div>

        
    </div>
    </>
  )
}

export default Array