import React,{useState,useEffect}from 'react'

function Effect(){
    const[data,setData]=useState(0)
    const[count,setCount]=useState(0)

//    useEffect(()=>{
//     setCount(count+2)
//    },[data])





    return(
        <div>
     <h1>Count:{data} | | COUNT:{count}</h1>
     <button onClick={()=>{setData(data+1)}}>Click Me</button>
        </div>
    )
}
export default Effect