import React from "react";

const Task = (props) => {
    const {message, date} = props.task
    return (
        <p><span><b>{message} </b></span>wykonaj do: <span>{date} </span>
        <button>Oznacz jako wykonane</button>
        <button>Usuń zadanie</button>
        </p>
    )
}

export default Task;