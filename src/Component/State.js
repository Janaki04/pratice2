import React, {Component} from 'react'

class State extends Component {
    constructor(){
        super()
        this.state={
            message:"welcome"
        }
    }
    Update=()=>{
        this.setState(
          {
            message:"Thank you"
          }
        
        )
    }
render(){
    return(
        <div>
       {this.state.message}
       <button onClick={()=>{this.Update()}}>Click</button>
        </div>
    )
}
}
export default State