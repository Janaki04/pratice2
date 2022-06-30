import React,{useReducer} from 'react'


const intialState={count:0}
const reducer=(state,action)=>{
 switch(action.type){
    case 'inc':
        return {count:state.count+1}
        case 'dec':
            return {count:state.count-1}
            default:
            return state    

 }
}
function Reducer(){
const[state,dispatch]=useReducer(reducer,intialState)
    return(
        <div>
      <h1>Count:{state.count}</h1>
      <button onClick={()=>dispatch({type:'inc'})}>Increment</button>
      <button onClick={()=>dispatch({type:'dec'})}>Decrement</button>
        </div>
    )
}


export default Reducer