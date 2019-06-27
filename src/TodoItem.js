import React from "react"

const TodoItem = (props) => {      
    return <li className={props.taskCompleted} id={`task-${props.item.id}`} onClick={props.completeTask} >{props.item.task} <button id={props.item.id} onClick={props.removeItem}>delete</button></li>   
    
}

export default TodoItem