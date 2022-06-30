import React, { useContext } from 'react'
import data from 'Learn'

function Learn2() {
    const data=useContext(data)
  return (
    <div>
      {data.name} 
    </div>
  )
}

export default Learn2