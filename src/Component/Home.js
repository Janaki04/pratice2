import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      Home
   <Link to='/home'>Home</Link>| |
   <Link to ='/student'>Student</Link>| |
   <Link to ='/Contact'>Contact</Link>
    </div>
  )
}

export default Home