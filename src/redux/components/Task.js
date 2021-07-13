import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, toggleTodo } from '../actions/todoActions';
import { Button } from "@material-ui/core";

const Todo = ({todo}) => {
    const [input, setInput] = useState(todo);
    const dispatch = useDispatch()
    return (
        <div>
           <span onClick={()=>dispatch(toggleTodo(todo.id))} style={{fontSize: '25px',color: 'blanchedalmond',textDecoration:todo.isDone? "line-through":"none"}}>{todo.description}</span><br/>
           <input value={input.description} onChange={(e)=>setInput({...input,description:e.target.value})} type="text"></input>
           <Button style={{height:'24px', marginLeft:'10px', marginRight:'10px'}} onClick={()=>dispatch(deleteTodo(todo.id))} variant="outlined" color="secondary">Delete</Button>
           <Button style={{height:'24px'}} onClick={()=>dispatch(editTodo(input))} variant="outlined" color="primary">Edit</Button>
        </div>
    ); 
}

export default Todo