import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { State, Task } from "../store"

export default function HomePage(){

    const tasks: Task[] = useSelector((state: State) => state.tasks)




    return(<>
        <h1>Welcome to the home page </h1>
        <h3>To Do</h3>
        <ul>
            {tasks.filter(t => !t.isComplete).map(t => <li>{t.desc} <button><Link to={`/details/${t.taskId}`} >Details</Link></button></li>)}
        </ul>


        <h3>Completed</h3>
            {tasks.filter(t => t.isComplete).map(t => <li>{t.desc}</li>)}
        <ul>

        </ul>

    </>)
}