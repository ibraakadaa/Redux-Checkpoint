import {createStore,combineReducers} from "redux"; 
import todoReducer from "../reducers/todoReducer";
import filterReducer from"../reducers/filterReducer"
var combiner= combineReducers({todoReducer,filterReducer})
export default createStore(combiner,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 