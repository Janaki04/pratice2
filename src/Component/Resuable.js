import React from 'react'
import Child from './Child'

function Resuable(){
    const arr=["a","b","c","d"]
    return(
        <div>
    {arr.map((values,index)=><Child key={index} number={values} />)}
        </div>
    )
}
export default Resuable