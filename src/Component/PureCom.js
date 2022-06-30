import React,{ PureComponent } from 'react'


class PureCom extends PureComponent{
    render(){
        console.log("pure");
        return(
            <div>
                <h1>Pure Component</h1>
         Name: {this.props.value}
            </div>
        )
    }
}
export default PureCom