import React, { useEffect,useState } from 'react'
import axios from 'axios'

const Api=()=>{
  
  const[details,setDetails]=useState([])

  useEffect(()=>{
    axios.get("https://react-blogbackend.herokuapp.com/api/v1/information/data")
    .then((request,response)=>{

     const data=request.data
      setDetails(data)
    })
  },[])
    





    return(
        <div>
      <h1>Hello World</h1>
       {details.map((items,index)=><h1 key={index}>{items.category}</h1>)}
        </div>
    )
}
export default Api