import React,{useState} from "react"


function Change(){
    const[data,setData]=useState({
        name:"",
        password:""
    })
   const changeHandler=(e)=>{
        setData({
            ...data,[e.target.name]: e.target.value
        })
    }
    const changeSubmit=(e)=>{
     e.preventDefault();
     console.log(data)
    }
    return(
        <div>
    <form onSubmit={changeSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={changeHandler}/>
        <label>Password</label>
        <input type="password" name="password" onChange={changeHandler}/>
      <input type="submit" value="submit"/>
    </form>
    
    </div>
    )
}
export default Change