import { Component } from "react"
import Task from './zadanie';
const TaskList = () => {
    return (
        <div>
            <h3>Lista zadań do zrobienia</h3>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    )
}

export default TaskList