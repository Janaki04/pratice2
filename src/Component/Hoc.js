import React,{Component} from 'react'

const Hoc =(Wrappedcomponent)=>{
    return(
        class extends Component{
            constructor(){
                super()
                this.state={
                   login:true
                }
            }
            render(){
                return(
                    <div>
              {this.state.login?<Wrappedcomponent name="A"/>:<h1>Please login</h1>}
                    </div>
                )
            }
        }

    )
}
export default Hoc