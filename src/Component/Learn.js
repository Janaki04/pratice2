import React from 'react'
import { createContext } from 'react'
import Learn2 from './Learn2'



export const data=createContext({
    name:"a",
    age:23
})

 function Learn() {
   
  return (
    <div>
    <data.Provider value={data}>
        <Learn2/>
    </data.Provider>

    </div>
  )
}
export default Learn

 





