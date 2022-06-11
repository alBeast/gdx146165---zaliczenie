import { Component } from "react"
import Task from './zadanie';
const TaskList = (props) => {
    const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
    return (
        <div className="tasks">
            <div className='activeTasks'>
                <h3>Lista zadań do zrobienia:</h3>
                {tasks}
            </div>
            <div className="doneTasks">
                <h3>Zadania wykonane:</h3>
                
            </div>
        </div>
    )
}

export default TaskList