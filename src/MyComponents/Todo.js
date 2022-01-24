import React from 'react'

export default function Todo(props) {
    return (
        <>
        <div className = "my-4">
            <h4>{props.todo.title}</h4>
            <p>{props.todo.desc}</p>
            {/* To avoid call automatic during rendering we put that inside an arrow function */}
            <button className = "btn btn-sm btn-danger" onClick={() => (props.onDelete(props.todo))}>Delete</button>
        </div>
        <hr />
        </>
    )
}
