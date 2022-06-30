import React from "react"


function Child(props){
    return(
        <div>
            This is Child Component
            Name:{props.name}
           Numbers: {props.number}
        </div>
    )
}
export default Child
