import React from 'react'
import Hoc from './Hoc'

 function Main(props) {
  return (
    <div>
        Welcome{props.name}
    </div>
  )
}
export default Hoc(Main)
