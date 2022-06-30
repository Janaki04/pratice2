import React, { Component } from 'react'
import Memo from './Memo'
import PureCom from './PureCom'
import PureReg from './PureReg'

class PureMain extends Component{

    constructor(props){
        super(props)
        this.state={
            name:"Janaki"
        }
    }

    componentDidMount=()=>{
        setInterval(()=>{
            this.setState({
                name:"Janu"
            })
           },2000)
    }

render(){
    console.log("main");
        return(
            <div>
                <h1>Parent Component</h1>
         {/* <PureCom value={this.state.name}/>
         <PureReg value={this.state.name}/> */}
         <Memo value={this.state.name}/>
            </div>
        )
    }
}
export default PureMain