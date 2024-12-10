"use client"
import { useState } from "react";

export default function ToDoForm({ onAddTask, closeFormFunc }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setID] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("low");

    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handleTaskIDChange = (event) => setID(event.target.value);
    const handleDueDateChange = (event) => setDueDate(event.target.value);
    const handlePriorityChange = (event) => setPriority(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        let task = {
            title: title,
            description: description,
            id: id,
            dueDate: dueDate,
            priority: priority
        }

        onAddTask(task);

        setTitle("");
        setDescription("");
        setID("");
        setDueDate("");
        setPriority("low");

        closeFormFunc();
    }

    return(
        <div onClick={closeFormFunc} className="absolute w-full h-full bg-gray-700/60 flex items-center justify-center">
            <form onClick={ (event) => event.stopPropagation() } onSubmit={handleSubmit} className="bg-white rounded-lg p-5 text-black max-w-md">
                <h1 className="font-bold text-2xl">Add a Task</h1>
                <div className="mt-2">
                    <label className="mr-2">Task Title:</label>
                    <input type="text" placeholder="Wash Dishes" value={title} onChange={handleTitleChange} className="border-black border-2 border-spacing-2"></input>
                </div>
                <div className="mt-2">
                    <label className="mr-2">Task Description:</label>
                    <input className="border-black border-2 border-spacing-2" type="text" placeholder="Wash the dishes in the sink" value={description} onChange={handleDescriptionChange}></input>
                </div>
                <div className="mt-2">
                    <label className="mr-2">Task ID:</label>
                    <input className="border-black border-2 border-spacing-2" placeholder="1" type="text" value={id} onChange={handleTaskIDChange}></input>
                </div>
                <div className="mt-2">
                    <label className="mr-2">Due Date:</label>
                    <input className="border-black border-2 border-spacing-2" type="date" value={dueDate} onChange={handleDueDateChange}></input>
                </div>
                <div className="mt-2">
                    <label className="mr-2">Priority:</label>
                    <select value={priority} onChange={handlePriorityChange} className="border-black border-2 border-spacing-2">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className="mt-2">
                    <button onClick={handleSubmit} type="submit" className="bg-blue-500 rounded py-1 px-10 text-white">Add</button>
                </div>
            </form>
        </div>
    );
}