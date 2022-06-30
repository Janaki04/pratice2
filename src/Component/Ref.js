import React,{useEffect, useRef} from 'react'

function Ref() {

const data=useRef(null)

const submitHandler=(e)=>{
    e.preventDefault()
    console.log(data.current.value)
}



useEffect(()=>{
data.current.focus()
},[])


  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>Name:</label>
            <input ref={data} type="text"/>| |
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Ref