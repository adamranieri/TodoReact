import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { markComplete, State, Task } from "../store";

export function DetailViewPage(){

    const params = useParams();
    const id = params.id ?? 'No value'
    const task: Task = useSelector((state: State) => state.tasks.filter(t => t.taskId === id)[0])
    const dispath = useDispatch();

    function complete(){
        dispath(markComplete(id))
    }


    return(<>
        <h1>Task Breakdown</h1>
        <h3>Desc: {task.desc}</h3>
        <h3>Priority: {task.priority}</h3>
        <h3>Completion Status: {task.isComplete ? "Completed" : "Pending"} </h3>
        { !task.isComplete && <button onClick={complete}>Mark Complete</button>}
    
    </>)
}