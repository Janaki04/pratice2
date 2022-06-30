import React, { useState } from 'react'
function Form() {
const [data,setData]=useState({
    name:"",
    marks:""
})

const[output,setOutput]=useState([])

const handleChange=(e)=>{
    setData({
        ...data,[e.target.name]:e.target.value
    })
}


const handleSubmit=(e)=>{
    e.preventDefault()
    if(data.marks<40){
   alert("Failed")
    }else{
    setOutput([...output,{...data,id:output.length}])
    }
}





  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label><br/>
          <input type="text" name="name" onChange={handleChange}/><br/>
          <label>Marks</label>  <br/>
          <input type="number" name="marks" onChange={handleChange}/><br/>
          <input type="submit" name="submit"/>
        </form>
        <div>

        { output.map( item =>(
    <h5 className='text4' key={item.id}> Name : {item.name} ; marks : {item.marks} ;  </h5>
    ))}


        </div>
    </div>
    
  )
}

export default Form