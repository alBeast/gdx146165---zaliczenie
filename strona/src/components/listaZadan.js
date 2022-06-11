import { Component } from "react"
import Task from './zadanie';
const TaskList = (props) => {
    const tasks = props.tasks.map(task => <Task key={task.id} task={task} />)
    return (
        <div>
            <h3>Lista zadań do zrobienia:</h3>
            {tasks}
        </div>
    )
}

export default TaskList