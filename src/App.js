import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import TodoList from './redux/components/ListTask';
import AddTodo from './redux/components/AddTask';
import { filterTodo } from './redux/actions/todoActions';
import {Button} from "@material-ui/core";
function App() {
  const todos = useSelector(state=>state.todoReducer.todos);
  const filter = useSelector(state=>state.filterReducer.filter);
  const dispatch = useDispatch()
  return (
    <div className="App">
         <AddTodo/>
         <br></br>
      <Button  onClick={()=>dispatch(filterTodo('All'))} variant="contained">All</Button>
      <Button style={{marginLeft:'10px', marginRight:'10px'}} onClick={()=>dispatch(filterTodo(true))} variant="contained" color="secondary">Done</Button>
      <Button onClick={()=>dispatch(filterTodo(false))} variant="contained" color="primary">UnDone</Button><br/><br/>
      <TodoList todos={filter==='All'? todos:todos.filter(el=>el.isDone===filter)}/>
      <hr></hr>
      
   
    </div>
  );
}

export default App;
