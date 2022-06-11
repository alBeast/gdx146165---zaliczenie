import React from "react";

const Task = (props) => {
    const {message, date, id} = props.task
    return (
        <p><span><b>{message} </b></span>wykonaj do: <span>{date} </span>
        <button onClick={() => props.change(id)}>Oznacz jako wykonane</button>
        <button onClick={() => props.delete(id)}>Usuń zadanie</button>
        </p>
    )
}

export default Task;