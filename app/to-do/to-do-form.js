"use client"
import { useState } from "react";

export default function ToDoForm({ onAddTask }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("low");

    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handleDueDateChange = (event) => setDueDate(event.target.value);
    const handlePriorityChange = (event) => setPriority(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        let task = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority
        }

        onAddTask(task);

        setTitle("");
        setDescription("");
        setDueDate("");
        setPriority("low");
    }

    return(
        <div className="inline-block px-96 pt-10">
                <h1 className="font-bold text-2xl">Add a Task</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <label className="mr-2">Task Title:</label>
                        <input type="text" placeholder="Wash Dishes" value={title} onChange={handleTitleChange} className="border-black border-2 border-spacing-2"></input>
                    </div>
                    <div className="mt-2">
                        <label className="mr-2">Task Description:</label>
                        <input type="text" placeholder="Wash the dishes in the sink" value={description} onChange={handleDescriptionChange}></input>
                    </div>
                    <div className="mt-2">
                        <label className="mr-2">Due Date:</label>
                        <input type="date" value={dueDate} onChange={handleDueDateChange}></input>
                    </div>
                    <div className="mt-2">
                        <label className="mr-2">Priority:</label>
                        <select value={priority} onChange={handlePriorityChange}>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="mt-2">
                        <button onClick={handleSubmit} type="submit" className="bg-blue-500 rounded py-1 px-10">Add</button>
                    </div>
                </form>
            </div>
    );
}