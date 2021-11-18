import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, State, Task } from "../store"

export default function CreationPage(){

    const descInput = useRef<HTMLInputElement>(null)
    const priorityInput = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch();
    const tasks:Task[] = useSelector((state: State) => state.tasks)

    function createTask(){
        const task:Task = {
            taskId:Math.random().toString(), 
            priority:Number(priorityInput.current?.value), 
            desc:descInput.current?.value ?? "",
            isComplete:false
        }

        dispatch(addTask(task))

    }



    return(<>
    <h1>Creation Page</h1>
    
    <label htmlFor="descInput">Task Description</label>
    <input ref={descInput} id="descInput" type="text"/>

    <label htmlFor="priorityInput">Priority Input</label>
    <input ref={priorityInput} id="priorityInput" type="number"/>

    <button onClick={createTask}>Create</button>

        
    </>)
}