import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Increase1,Decrease1,Increase2,Decrease2 } from '../Action/Action'

export default function Countermain(){
 
const data1=useSelector(state=>state.Counterone)
const data2=useSelector(state=>state.Countertwo)

const dispatch=useDispatch()

return(
    <div>
      <h1>Student 1 details :- Name: {data1.name} and Marks:{data1.marks}</h1> 
      <button onClick={()=>{dispatch(Increase1())}}>Increase</button>| |
      <button onClick={()=>{dispatch(Decrease1())}}>Decrease</button>

      <hr/>
      <h1>Student 2 details :- Name: {data2.name} and Marks:{data2.marks}</h1> 
      <button onClick={()=>{dispatch(Increase2(5))}}>Increase</button>| |
      <button onClick={()=>{dispatch(Decrease2(5))}}>Decrease</button>
       

    </div>
)

}