import React,{createContext,useState} from 'react'
import Context from './Context'

export const  Collection= createContext()

const Create =()=>{
    const [data,setData]=useState(0)
    return(
        <div>
      <Collection.Provider value={[data,setData]}>
  <Context/>
  <button onClick={()=>{setData(data+2)}}>Increment</button>
</Collection.Provider>
        </div>
    )
}
export default Create