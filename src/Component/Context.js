import React,{useContext} from 'react'
import { Collection } from './Create'

function Context() {
    const [data]=useContext(Collection)
  return (
    <div>
      <h1>Increment{data}</h1>  
    </div>
  )
}

export default Context