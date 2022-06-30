

const intialState={
    name:"A",
   marks:25
}
export default function Counterone(state=intialState,action){
 switch(action.type){
    case 'incOne':
        return {...state,marks:state.marks+1}
      case 'decOne':
        return {...state,marks:state.marks-1}
        default:
            return state  
 }


}