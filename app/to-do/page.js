"use client"

import { useState, useEffect } from "react";
import TaskList from "./task-list";
import ToDoForm from "./to-do-form";
import { getTasks, addTask } from "../_services/task-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function ToDoPage() {
    const [taskList, setTaskList] = useState([]);
    const [formOpen, setFormOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { user } = useUserAuth();

    const handleAddItem = async (taskObj) => {
        if (user && user.uid) {
            const taskId = await addTask(user.uid, taskObj);
            const taskWithId = { ...taskObj, id: taskId };
            setTaskList((prevTaskList) => Array.isArray(prevTaskList) ? [...prevTaskList, taskWithId] : [taskWithId]);
        }
    };

    async function loadTasks() {
        if (user && user.uid) {
            const userTasks = await getTasks(user.uid);
            setTaskList(userTasks);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if (user) {
            loadTasks();
        } else {
            setIsLoading(false);
        }
    }, [user]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);

    return (
        <main>
            {formOpen && <ToDoForm onAddTask={handleAddItem} closeFormFunc={closeForm} />}
            <h1 className="flex justify-center text-4xl font-bold">Task List</h1>
            <div className="flex justify-center py-2">
                <button className="bg-blue-500 rounded text-white px-2 py-1" type="button" onClick={openForm}>Open Task Addition form</button>
            </div>
            <TaskList tasks={taskList} />
        </main>
    );
}