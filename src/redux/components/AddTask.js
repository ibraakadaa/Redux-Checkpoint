import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/todoActions'

const AddTodo = () => {
    const [newTodo, setNewTodo] = useState(null)
    const dispatch = useDispatch()
    return (
        <div>
            <input placeholder='new todo' type="text" onChange={(e)=>setNewTodo({description:e.target.value})}></input>
            <button onClick={()=>dispatch(addTodo(newTodo))}>ADD</button>
        </div>
    )
}

export default AddTodo
