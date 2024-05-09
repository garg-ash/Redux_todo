import React from 'react'
import { handleSubmit, handleChange } from '../reduxTodo/slice'
import { useDispatch, useSelector } from 'react-redux'

function Todo() {
    const dispatch = useDispatch();
    const initState = useSelector((state)=>{
        return state.reduce;
    })
  return (
    <>
    <h1>Todo</h1>
    <form action="" onSubmit={(e)=>{
        e.preventDefault()
        dispatch(handleSubmit())
    }}>
        <input type="text" value={initState.value} onChange={(e)=> dispatch(handleChange(e.target.value))}/>
        <button>Add Tasks</button>
    </form>
    <ul>
        {initState.tasks.map((task, index)=>{
            return <li key={index}>{task}</li>
        })}
    </ul>
    </>
  )
}

export default Todo
