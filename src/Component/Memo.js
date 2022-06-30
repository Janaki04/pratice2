import React, { memo } from 'react'

function Memo (props){
    console.log("memo")
return(
    <div>
        <h1>Memo Component</h1>
        Name:{props.value}
    </div>
)
}
export default memo( Memo)