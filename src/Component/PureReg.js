import React, { Component } from 'react';


class PureReg extends Component{
    render(){
        console.log("Regular");
        return(
            <div>
                <h1>Regular Component</h1>
      Name: {this.props.value}
            </div>
        )
    }
}
export default PureReg