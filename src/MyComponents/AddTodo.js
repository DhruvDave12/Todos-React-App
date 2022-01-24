import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        } else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
       
    }
    return (
        <div className = "container py-3">
            <h2 className = "display-5 py-3 text-center">Add Todo</h2>
            <form onSubmit = {submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} aria-describedby="titleHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="description" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}
