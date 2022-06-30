const intialState={
    name:"B",
   marks:50
}
export default function Countertwo(state=intialState,action){
 switch(action.type){
    case 'incTwo':
        return {...state,marks:state.marks+action.payload}
      case 'decTwo':
        return {...state,marks:state.marks-action.payload}
        default:
            return state  
 }


}