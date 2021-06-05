
import React from 'react'
import { useState } from 'react'
import './Addtask.css'
import {useDispatch} from 'react-redux'
import {savetodo} from '../features/toDoSlice'
import {v4 as uuidv4} from 'uuid'

//Adding one element (ie one Task) at once , savetodo is the action responsable for this .

const Addtask = () => {
    const [input,setInput]=useState('')
    const dispatch = useDispatch()

    const addTodo =()=>{
        console.log(`add ${input}`) 

        dispatch(
            savetodo({
                description:input,
                done : false,
                id : uuidv4()
            })
        )

    }

    return (
        <div  className="input" value={input} onChange={e=>setInput(e.target.value)}>
            <input type ="text"></input>
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default Addtask