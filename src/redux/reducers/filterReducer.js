
import {TOGGLE_FILTER} from "../../redux/actions/todoTypes"
const initState ={
    filter: 'All'}
const filterReducer=(state=initState,{type,payload})=>{       
    
   switch (type) {
    case TOGGLE_FILTER:
    return {
        ...state,
        filter:payload
    }
default:
return state
}}
export default filterReducer